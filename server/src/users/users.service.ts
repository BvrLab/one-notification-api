import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/user.dto';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {

  constructor(
    private prisma: PrismaService,
  ) {}

  async create(createUserDto:CreateUserDto) {
    const user = this.prisma.user.create({
      data: createUserDto,
    });
    return user;
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    const user = this.prisma.user.findUnique({
      where:{email},
    });

    return user;
  }

  
}