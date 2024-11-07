import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    Res,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { GoogleOAuthGuard } from './guards/google-oauth/google-oauth.guard';

import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { CreateUserDto } from 'src/users/dtos/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // @Post('refresh')

    // @Post('signout')

    @Post('signup')
    registerUser(@Body() createUserDto: CreateUserDto) {
        return this.authService.registerUser(createUserDto);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async localLogin(@Request() req) {
        const token = await this.authService.login(
            req.user.id,
            req.user.username,
        );
        return { id: req.user.id, token };
    }

    @UseGuards(GoogleOAuthGuard)
    @Get('google/login')
    async googleLogin() {}

    @UseGuards(GoogleOAuthGuard)
    @Get('google/callback')
    async googleCallback(@Request() req, @Res() res: Response) {
        // console.log('Google User', req.user);
        const resopnse = await this.authService.login(
            req.user.id,
            req.user.name,
        );
        res.redirect(
            `http://localhost:3000/api/auth/google/callback?userId=${resopnse.id}&name=${resopnse.name}&accessToken=${resopnse.accessToken}`,
        );
    }
}
