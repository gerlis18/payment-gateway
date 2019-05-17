import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {AuthService} from './auth.service';
import {AuthDto} from '../../dto/auth.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey'
        });
    }

    async validate(payload: AuthDto) {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
