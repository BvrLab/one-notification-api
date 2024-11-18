import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    accessToken: string;

    @IsString()
    @IsNotEmpty()
    refreshToken: string;

    //   @IsString()
    //   @IsNotEmpty()
    //   provider: string;

    //   @IsString()
    //   @IsNotEmpty()
    //   providerId: string;
}
