import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigModule } from '@nestjs/config';
import googleOauthConfig from './config/google-oauth-config';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
    imports: [
		ConfigModule.forFeature(googleOauthConfig),
	],
    providers: [
      AuthService,
	  UsersService,
      GoogleStrategy,
    ],
    controllers: [AuthController],
})
export class AuthModule {}
