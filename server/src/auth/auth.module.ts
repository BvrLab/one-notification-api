import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigModule } from '@nestjs/config';
import googleOauthConfig from './config/google-oauth-config';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { localStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
		ConfigModule.forFeature(googleOauthConfig),
		PassportModule
	],
    providers: [
      AuthService,
	  UsersService,
      GoogleStrategy,
	  localStrategy
    ],
    controllers: [AuthController],
})
export class AuthModule {}
