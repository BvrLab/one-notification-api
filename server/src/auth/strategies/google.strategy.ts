import {
    Inject,
    Injectable,
    InternalServerErrorException,
    Logger,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import googleOAuthConfig from '../config/google-oauth-config';
import { ConfigType } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { AuthService } from '../auth.service';
import { hash } from 'argon2';

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
            scope: ['profile', 'email', 'https://mail.google.com/'],
        });
    }

    authorizationParams(options: any): any {
        return Object.assign(options, {
            prompt: 'consent',
            access_type: 'offline',
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        try {
            const user = await this.authService.validateGoogleUser({
                email: profile.emails[0].value,
                username: profile.name.givenName + profile.name.familyName,
                // avatarUrl: profile.photos[0].value,
                password: '',
            });

            this.userService.updateGoogleAccessToken(user.id, accessToken),
                this.userService.updateGoogleRefreshToken(
                    user.id,
                    refreshToken,
                ),
                done(null, user);
        } catch (error) {
            Logger.error(error);
            const internalError = new InternalServerErrorException();
            done(internalError);
            throw internalError;
        }
    }
}
