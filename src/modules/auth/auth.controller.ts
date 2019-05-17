import {Body, Controller, Get, HttpCode, Post, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthDto} from '../../dto/auth.dto';
import {AuthGuard} from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    @HttpCode(200)
    login(@Body() authDto: AuthDto) {
        return this.authService.signIn(authDto)
            .catch((error) => error)
            .then((res: string) => {
                return { token: res };
            });
    }

    @Get()
    @UseGuards(AuthGuard())
    hola() {
        return 'hola';
    }
}
