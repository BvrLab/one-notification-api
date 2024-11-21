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
    accessToken?: string;

    @IsString()
    refreshToken?: string;

    //   @IsString()
    //   @IsNotEmpty()
    //   provider: string;

    //   @IsString()
    //   @IsNotEmpty()
    //   providerId: string;
}
