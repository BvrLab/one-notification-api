import {
    ConflictException,
    Inject,
    Injectable,
    Req,
    Res,
    UnauthorizedException,
} from '@nestjs/common';
import { compare } from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dtos/auth.dto';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth-jwtPayload';
// import { hash, verify } from 'argon2';
import { ConfigType } from '@nestjs/config';
import refreshConfig from './config/refresh.config';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @Inject(refreshConfig.KEY)
        private refreshTokenConfig: ConfigType<typeof refreshConfig>,
    ) {}

    async validateLocalUser(email: string, password: string) {
        const user = this.usersService.findOneByEmail(email);
        if (!user) throw new UnauthorizedException('User Not Found!');

        const isPasswordMatch = await compare(password, (await user).password);
        if (!isPasswordMatch)
            throw new UnauthorizedException('Invalid credentials');

        return { id: (await user).id };
    }

    async login(userId: string, name: string) {
        const { accessToken, refreshToken } = await this.generateTokens(userId);
        // console.log('generated accessToken: ', accessToken)
        // const hashedRT = await hash(refreshToken);
        // await this.usersService.updateRefreshToken(userId, refreshToken);
        return {
            id: userId,
            name: name,
            accessToken,
            refreshToken,
        };
    }

    async generateTokens(userId: string) {
        const payload: AuthJwtPayload = { sub: userId };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload),
            this.jwtService.signAsync(payload, this.refreshTokenConfig),
        ]);

        return {
            accessToken,
            refreshToken,
        };
    }

    async validateGoogleUser(googleUser: CreateUserDto) {
        const user = await this.usersService.findOneByEmail(googleUser.email);
        if (user) return user;
        return await this.usersService.create(googleUser);
    }

    async registerUser(createUserDto: CreateUserDto) {
        const user = await this.usersService.findOneByEmail(
            createUserDto.email,
        );
        if (user) throw new ConflictException('User already exists!');
        return this.usersService.create(createUserDto);
    }
}
