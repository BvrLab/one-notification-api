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
import { PrismaService } from 'src/prisma/prisma.service';
import { EmailNotifications, EmailNotificationStatus } from '@prisma/client';

@Injectable()
export class EmailApiService {
    constructor(
        private readonly usersService: UsersService,
        private readonly prisma: PrismaService,
    ) {
        this.oAuth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_REDIRECT_URI,
        );
    }

    private readonly oAuth2Client: OAuth2Client;

    /**
     * Sends an email and updates its status in the database.
     */
    public async sendMail(dto: EmailDto, userId: string): Promise<any> {
        const user = await this.usersService.findOneById(userId);

        if (!user || !user.googleAccessToken || !user.googleRefreshToken) {
            throw new UnauthorizedException('User not authenticated with Google');
        }

        // Configure OAuth2 client with user credentials
        this.oAuth2Client.setCredentials({
            access_token: user.googleAccessToken,
            refresh_token: user.googleRefreshToken,
        });

        const email = await this.saveEmail({ ...dto, senderEmail: user.email });

        try {
            const transport = await this.createTransport(user);
            const mailOptions = this.createMailOptions(email, dto);

            const result = await transport.sendMail(mailOptions);
            await this.updateEmailStatus(email, 'sent');

            // console.log('Email sent successfully:\n', result);
            return result;
        } catch (error) {
            console.error('Failed to send email:', error);
            await this.updateEmailStatus(email, 'failed');
            throw new BadRequestException('Failed to send email');
        }
    }

    /**
     * Creates a mail transport using OAuth2 authentication.
     */
    private async createTransport(user: any): Promise<nodemailer.Transporter> {
        const { token } = await this.oAuth2Client.getAccessToken();

        return nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: user.email,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                accessToken: token,
            },
        });
    }

    /**
     * Creates email options for sending.
     */
    private createMailOptions(email: EmailNotifications, dto: EmailDto) {
        return {
            from: email.senderEmail,
            to: email.recipient,
            subject: email.subject,
            text: email.content,
            html: `<p>${dto.content}</p>`,
        };
    }

    /**
     * Saves an email record in the database.
     */
    private async saveEmail(dto: EmailDto): Promise<EmailNotifications> {
        try {
            return await this.prisma.emailNotifications.create({
                data: {
                    senderEmail: dto.senderEmail,
                    recipient: dto.recipient,
                    subject: dto.subject,
                    content: dto.content,
                },
            });
        } catch (error) {
            console.error('Failed to save email:', error);
            throw new BadRequestException('Failed to save email');
        }
    }

    /**
     * Updates the email status in the database.
     */
    private async updateEmailStatus(
        emailRecord: EmailNotifications,
        status: EmailNotificationStatus,
    ): Promise<EmailNotifications> {
        try {
            return await this.prisma.emailNotifications.update({
                where: { id: emailRecord.id },
                data: { status },
            });
        } catch (error) {
            console.error('Failed to update email status:', error);
            throw new BadRequestException('Failed to update email status');
        }
    }

    /**
     * Retrieves an email by its ID.
     */
    public async getEmailById(id: string): Promise<EmailNotifications | null> {
        try {
            return await this.prisma.emailNotifications.findUnique({
                where: { id },
            });
        } catch (error) {
            console.error('Failed to retrieve email by ID:', error);
            throw new BadRequestException('Failed to retrieve email');
        }
    }

    /**
     * Retrieves all emails for a specific user.
     */
    public async getAllEmailsByUserId(userId: string): Promise<EmailNotifications[]> {
        try {
            return await this.prisma.emailNotifications.findMany({
                where: { senderEmail: userId },
            });
        } catch (error) {
            console.error('Failed to retrieve user emails:', error);
            throw new BadRequestException('Failed to retrieve emails');
        }
    }
}