import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys'

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
})
export class AppModule {}
