import { ConflictException, Injectable, Req, Res, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dtos/auth.dto';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth-jwtPayload';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateLocalUser(email: string, password: string) {
        const user = this.usersService.findOneByEmail(email);
        if (!user) throw new UnauthorizedException('User Not Found!');

        const isPasswordMatch = await compare(password, (await user).password);
        if (!isPasswordMatch)
            throw new UnauthorizedException('Invalid credentials');

        return { id: (await user).id };
    }

    async login(userId: string) {
        const payload: AuthJwtPayload = { sub: userId };
        //genrerate accessToken
        const accessToken = await this.jwtService.signAsync(payload);
        return {
            id: userId,
            accessToken,
        };
    }

    async validateGoogleUser(googleUser: CreateUserDto) {
        const user = await this.usersService.findOneByEmail(googleUser.email);
        if (user) return user;
        return await this.usersService.create(googleUser);
    }

    async registerUser(createUserDto: CreateUserDto){
        const user = await this.usersService.findOneByEmail(createUserDto.email);
        if (user) throw new ConflictException('User already exists!');
        return this.usersService.create(createUserDto);
    }
}
