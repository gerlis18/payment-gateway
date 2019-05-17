import {forwardRef, Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {DatabaseModule} from '../../database/database.module';
import {usersProviders} from '../../providers/users.providers';
import {AuthModule} from '../auth/auth.module';

@Module({
    imports: [DatabaseModule, forwardRef(() => AuthModule)],
    controllers: [UsersController],
    providers: [
        UsersService,
        ...usersProviders
    ],
    exports: [UsersService]
})
export class UsersModule {}
