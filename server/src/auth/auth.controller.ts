import { Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOAuthGuard } from './guards/google-oauth.guard';

import { LocalAuthGuard } from './guards/local-auth.guard';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // @Post('refresh')

    // @Post('signout')

    // @Public()
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async localLogin(@Request() req){
        return req.user.id;
    }

    @UseGuards(GoogleOAuthGuard)
    @Get('google/login')
    async googleLogin() {}


    @UseGuards(GoogleOAuthGuard)
    @Get('google/callback')
    googleCallback() {}
}
