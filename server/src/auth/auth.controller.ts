import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOAuthGuard } from './guards/google-oauth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('google')
    @UseGuards(GoogleOAuthGuard)
    async auth() {}
}
