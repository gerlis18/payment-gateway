import {Inject, Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import {User} from '../../interfaces/user.interface';
import {UserDto} from '../../dto/user.dto';
import {Utils} from '../../utils';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

    async create(userDto: UserDto): Promise<User> {
        userDto.password = Utils.generateHashMd5(userDto.password);

        const createdUser = new this.userModel(userDto);
        return await createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findById(id: string): Promise<User>  {
        return await this.userModel.findById(id).exec();
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }
}
