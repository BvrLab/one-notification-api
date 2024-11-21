import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

import { EmailDto } from './dtos';
import * as nodemailer from 'nodemailer';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class EmailApiService {
    private oAuth2Client: OAuth2Client;
    constructor(private usersService: UsersService) {
        this.oAuth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_REDIRECT_URI,
        );
    }

    public async sendMail(dto: EmailDto, userId: string) {
        const user = await this.usersService.findOneById(userId);

        if (!user || !user.googleAccessToken || !user.googleRefreshToken) {
            throw new UnauthorizedException(
                'User not authenticated with Google',
            );
        }

        // Set credentials with the accessToken and refreshToken
        this.oAuth2Client.setCredentials({
            access_token: user.googleAccessToken,
            refresh_token: user.googleRefreshToken,
        });

        try {
            // Attempt to get a fresh access token if expired
            const { token } = await this.oAuth2Client.getAccessToken();

            const transport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    type: 'OAuth2',
                    user: user.email,
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    // refreshToken: user.googleRefreshToken,
                    accessToken: token, // Use the fresh access token
                },
            });

            const mailOptions = {
                from: user.email,
                to: dto.recipient,
                subject: dto.subject,
                text: dto.content,
                html: `<p>${dto.content}</p>`,
            };

            const result = await transport.sendMail(mailOptions);
            console.log('Email sent successfully');
            return result;
        } catch (error) {
            console.error('Failed to send email:', error);
            throw new BadRequestException('Failed to send email');
        }
    }
    // //update the email status
    // private async updateEmailStatus(emailRecord, status) {
    //     const updatedEmailRecord = await this.prisma.emailNotifications.update({
    //         where: { id: emailRecord.id },
    //         data: { status: status },
    //     });
    //     return updatedEmailRecord;
    // }
}
