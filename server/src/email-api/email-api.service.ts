import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailDto } from './dto/email.dto';
import { PrismaService } from '../prisma/prisma.service';

//https://notiz.dev/blog/send-emails-with-nestjs
@Injectable()
export class EmailApiService {
  constructor(
    private mailerService: MailerService,
    private prisma: PrismaService,
  ) {}



//To-Do: improve API response, is auth? database? message? and email status?

  //Send the email
  public async sendMail(dto: EmailDto) {
    const emailRecord = await this.saveEmail(dto);
    try {
      const info = await this.mailerService.sendMail({
        to: dto.recipient,
        from: 'robot.fin.one@gmail.com',
        subject: dto.subject,
        text: dto.content,
        html: `<p>${dto.content}</p>`,
      });
      console.log('Email sent successfully');
      console.log(info);

      return info;
      
    } catch (error) {
            const updatedEmailRecord = await this.updateEmailStatus(
        emailRecord,
        'failed',
      );
    }
  }

  //Save the email to the database
  private async saveEmail(dto: EmailDto) {
    try {
      const emailRecord = await this.prisma.emailNotifications.create({
        data: {
          recipient: dto.recipient,
          subject: dto.subject,
          content: dto.content,
        },
      });
      return emailRecord;
    } catch (error) {
      console.log(error);
    }
  }

  //update the email in the database
  private async updateEmailStatus(emailRecord, status) {
    const updatedEmailRecord = await this.prisma.emailNotifications.update({
      where: { id: emailRecord.id },
      data: { status: status },
    });
    return updatedEmailRecord;
  }

  //get email by id
  public async getEmail(id: string) {
    const emailRecord = await this.prisma.emailNotifications.findUnique({
      where: { id: id },
    });
    return emailRecord;
  }
}
