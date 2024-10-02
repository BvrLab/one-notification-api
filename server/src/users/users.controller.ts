import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('create-user')
    public async createUser(@Body() dto: CreateUserDto) {
        return await this.usersService.create(dto);
    }

    @Get('user/:email')
    public async findOne(@Param('email') email: string) {
        return await this.usersService.findOneByEmail(email);
    }
}
