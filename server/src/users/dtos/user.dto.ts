import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsOptional()
    hash?: string;
  
    @IsString()
    @IsNotEmpty()
    username: string;

//   @IsString()
//   @IsNotEmpty()
//   provider: string;

//   @IsString()
//   @IsNotEmpty()
//   providerId: string;
}