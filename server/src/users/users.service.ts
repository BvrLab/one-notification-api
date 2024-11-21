import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/user.dto';
import * as bcrypt from 'bcryptjs';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        const userData = createUserDto;

        if (createUserDto.password) {
            const passwordHash = await bcrypt.hash(userData.password, 10);
            userData.password = passwordHash;
        }

        const user = this.prisma.user.create({
            data: userData,
        });

        return user;
    }

    async findOneByEmail(email: string) {
        const user = this.prisma.user.findUnique({
            where: { email: email },
        });

        return user;
    }

    async findOneById(id: string) {
        const user = this.prisma.user.findUnique({
            where: { id: id },
        });

        return user;
    }

    async updateGoogleAccessToken(
        userId: string,
        hashedAccessToken: string,
    ): Promise<void> {
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                googleAccessToken: hashedAccessToken,
            },
        });
    }

    async updateGoogleRefreshToken(
        userId: string,
        hashedRefreshToken: string | null,
    ) {
        return await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                googleRefreshToken: hashedRefreshToken,
            },
        });
    }

    async updateHashedRefreshToken(userId: string, hashedRT: string | null) {
        return await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                hashedRefreshToken: hashedRT,
            },
        });
    }
}
