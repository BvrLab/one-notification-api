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

        if (!user || !user.accessToken || !user.refreshToken) {
            throw new UnauthorizedException(
                'User not authenticated with Google',
            );
        }

        // Set credentials with the accessToken and refreshToken
        this.oAuth2Client.setCredentials({
            access_token: user.accessToken,
            refresh_token: user.refreshToken,
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
                    refreshToken: user.refreshToken,
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
            console.log('from: ', mailOptions.from);
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

// import {
//     Injectable,
//     BadRequestException,
//     UnauthorizedException,
// } from '@nestjs/common';
// import { MailerService } from '@nestjs-modules/mailer';
// import { EmailDto } from './dtos/email.dto';
// import { PrismaService } from '../prisma/prisma.service';

// //https://notiz.dev/blog/send-emails-with-nestjs
// @Injectable()
// export class EmailApiService {
//     constructor(
//         private mailerService: MailerService,
//         private prisma: PrismaService,
//     ) {}

//     //To-Do: improve API response, is auth? database? message? and email status?

//     //Send the email
//     public async sendMail(dto: EmailDto) {
//         const emailRecord = await this.saveEmail(dto);
//         try {
//             const info = await this.mailerService.sendMail({
//                 to: dto.recipient,
//                 from: 'robot.fin.one@gmail.com',
//                 subject: dto.subject,
//                 text: dto.content,
//                 html: `<p>${dto.content}</p>`,
//             });
//             console.log('Email sent successfully');
//             console.log(info);

//             return info;

//             // const updatedEmailRecord = await this.updateEmailStatus(
//             //   emailRecord,
//             //   'sent',
//             // );
//             // return updatedEmailRecord;
//         } catch (error) {
//             const updatedEmailRecord = await this.updateEmailStatus(
//                 emailRecord,
//                 'failed',
//             );
//             // if (error instanceof UnauthorizedException) {
//             //   throw new UnauthorizedException({
//             //     message: 'Email failed to send',
//             //     description: 'Failed setting up transporter smtp-transport.',
//             //     emailRecord: updatedEmailRecord,
//             //   });
//             // }
//             // throw new BadRequestException(
//             //   'Something bad happened',
//             //   'Error sending email',
//             // );
//         }
//     }

//     //Save the email to the database
//     private async saveEmail(dto: EmailDto) {
//         try {
//             const emailRecord = await this.prisma.emailNotifications.create({
//                 data: {
//                     recipient: dto.recipient,
//                     subject: dto.subject,
//                     content: dto.content,
//                 },
//             });
//             return emailRecord;
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     //update the email in the database
//     private async updateEmailStatus(emailRecord, status) {
//         const updatedEmailRecord = await this.prisma.emailNotifications.update({
//             where: { id: emailRecord.id },
//             data: { status: status },
//         });
//         return updatedEmailRecord;
//     }

//     //get email by id
//     public async getEmail(id: string) {
//         const emailRecord = await this.prisma.emailNotifications.findUnique({
//             where: { id: id },
//         });
//         return emailRecord;
//     }
// }
