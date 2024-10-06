import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOAuthGuard } from './guards/google-oauth.guard';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // @Post('refresh')

    // @Post('signout')

    // @Public()
    @UseGuards(GoogleOAuthGuard)
    @Get('google/login')
    async googleLogin() {}


    @UseGuards(GoogleOAuthGuard)
    @Get('google/callback')
    googleCallback() {}
}
