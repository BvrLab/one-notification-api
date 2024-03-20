import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { EmailApiService } from './email-api.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailApiController } from './email-api.controller';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          service: "gmail",
          // host: config.get('MAIL_HOST'),
          // port: 587,
          // secure: false,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
        },
        defaults: {
          from: `"No Reply" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [EmailApiService],
  controllers: [EmailApiController], 

  // exports: [EmailApiService]
})
export class EmailApiModule {}
