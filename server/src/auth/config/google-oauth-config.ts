import { registerAs } from '@nestjs/config';

export default registerAs('googleOAuthConfig', () => ({
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALL_BACK_URL,
    },
}));
