import { BadRequestException, Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dtos/auth.dto';
import { CreateUserDto } from 'src/users/dtos/user.dto';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      // private jwtService: JwtService,
    ) 
    {}

    // generateJwt(payload){
    //     return this.jwtService.sign(payload);
    // }

    // async validateGoogleUser(googleUser : CreateUserDto){
    //     if(!googleUser){
    //         throw new BadRequestException('Unauthenticated');
    //     }

    //     const userExists = await this.usersService.findOneByEmail(googleUser.email);

    //     if(!userExists){
    //         return this.usersService.create(googleUser);
    //     }

    // }

    // async registerUser(googleUser: RegisterUserDto){
    //     try {
    //         const newUser = this.usersService.create(googleUser);
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
