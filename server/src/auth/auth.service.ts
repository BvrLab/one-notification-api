import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dtos/auth.dto';

@Injectable()
export class AuthService {
    constructor() // private usersService: UsersService, // private jwtService: JwtService,
    {}

    // generateJwt(payload){
    //     return this.jwtService.sign(payload);
    // }

    // async signIn(user){
    //     if(!user){
    //         throw new BadRequestException('Unauthenticated');
    //     }

    //     const userExists = await this.usersService.findOne(user.email);

    //     if(!userExists){
    //         return this.registerUser(user);
    //     }

    // }

    // async registerUser(user: RegisterUserDto){
    //     try {
    //         const newUser = this.usersService.create(user);
    //         newUser.username = generateFromEmail(user.email, 5);

    //         await this.userRepository.save(newUser);

    //         return this.generateJwt({
    //           sub: newUser.id,
    //           email: newUser.email,
    //         });
    //       } catch {
    //         throw new InternalServerErrorException();
    //       }
    // }
}
