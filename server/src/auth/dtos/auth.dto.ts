import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterUserDto {
    //   @IsString()
    //   @IsNotEmpty()
    //   provider: string;

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    //   @IsString()
    //   @IsOptional()
    //   picture?: string;
}
