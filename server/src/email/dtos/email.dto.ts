import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailDto {
    @IsEmail()
    @IsNotEmpty()
    senderEmail?: string;

    @IsEmail()
    @IsNotEmpty()
    recipient: string;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    // @IsJSON()
    // attachments?: JSON;

    //may have to add template and schedule
}
