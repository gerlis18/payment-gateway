import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from './modules/user/users.module';
import {AuthModule} from './modules/auth/auth.module';

@Module({
  imports: [
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
