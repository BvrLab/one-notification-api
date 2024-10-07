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
        const userData  = createUserDto;
        console.log(userData);
        
        if(createUserDto.password){
            const passwordHash = await bcrypt.hash(userData.password,10)
            userData.password = passwordHash;
        }
        console.log(userData);


        const user = this.prisma.user.create({
            data: userData,
        });

        console.log(user)
        
        return user;
    }

    async findOneByEmail(email: string) {
        const user = this.prisma.user.findUnique({
            where: { email: email },
        });

        return user;
    }
}
