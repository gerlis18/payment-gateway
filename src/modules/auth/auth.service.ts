import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {AuthDto} from '../../dto/auth.dto';
import {UsersService} from '../user/users.service';
import {User} from '../../interfaces/user.interface';
import {Utils} from '../../utils';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {
    }

    async signIn(authDto: AuthDto): Promise<string> {
        const user = await this.validateUser(authDto);
        if (user.password !== Utils.generateHashMd5(authDto.password)) {
            return Promise.reject({
               msg: 'Contraseña invalida'
            });
        }

        return this.jwtService.sign(authDto);
    }

    async validateUser(payload: any): Promise<User> {
        return await this.usersService.findOneByEmail(payload.email);
    }
}
