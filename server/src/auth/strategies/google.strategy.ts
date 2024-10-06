import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';
import googleOAuthConfig from '../config/google-oauth-config';
import { ConfigType } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(
        @Inject(googleOAuthConfig.KEY)
        private configService: ConfigType<typeof googleOAuthConfig>,
        //data base later
        private userService: UsersService,
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
        done:VerifyCallback,
    ): Promise<any> {
        console.log(profile);
        const { id, name, emails } = profile;

        const user = {
            provider: 'google',
            providerId: id,
            email: emails[0].value,
            name: `${name.givenName} ${name.familyName}`,
        };

        done(null, user);
    }
}
