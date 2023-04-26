import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys'

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  // controllers: [UserController],
  // providers: [UserService],
})
export class AppModule {}
