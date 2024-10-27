import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Request,
    Res,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
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
        const token = await this.authService.login(req.user.id);
        return { id: req.user.id, token };
    }

    @UseGuards(GoogleOAuthGuard)
    @Get('google/login')
    async googleLogin() {}

    @UseGuards(GoogleOAuthGuard)
    @Get('google/callback')
    async googleCallback(@Req() req, @Res() res) {
        const response = await this.authService.login(req.user.id);
        res.redirect(`http://localhost:3333?token=${response.accessToken}`);
    }
}
