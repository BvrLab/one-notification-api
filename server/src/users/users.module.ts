import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from 'src/auth/config/jwt.config';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
