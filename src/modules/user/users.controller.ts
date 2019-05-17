import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {UserDto} from '../../dto/user.dto';
import {AuthGuard} from '@nestjs/passport';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/save')
    createUser(@Body() userDto: UserDto) {
        return this.usersService.create(userDto)
            .then((resp) => resp)
            .catch((error) => error);
    }

    @Get()
    @UseGuards(AuthGuard())
    getUsers() {
        return this.usersService.findAll()
            .then(res => res)
            .catch(err => err);
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.findById(id)
            .then((resp) => resp)
            .catch((error) => error);
    }

}
