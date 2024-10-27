import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';
import googleOAuthConfig from '../config/google-oauth-config';
import { ConfigType } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(
        @Inject(googleOAuthConfig.KEY)
        private configService: ConfigType<typeof googleOAuthConfig>,
        private userService: UsersService,
        private authService: AuthService,
    ) {
        super({
            clientID: configService.google.clientID,
            clientSecret: configService.google.clientSecret,
            callbackURL: configService.google.callbackURL,
            scope: ['profile', 'email'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const user = await this.authService.validateGoogleUser({
            email: profile.emails[0].value,
            username: profile.name.givenName + profile.name.familyName,
            // avatarUrl: profile.photos[0].value,
            password: '',
        });
        // return user;

        done(null, user);
    }
}
