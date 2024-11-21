import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { EmailApiService } from './email-api.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailApiController } from './email-api.controller';
import { UsersService } from 'src/users/users.service';

@Module({
    imports: [],
    providers: [EmailApiService, UsersService],
    controllers: [EmailApiController],
})
export class EmailApiModule {}
