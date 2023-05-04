import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import config from './config/keys'

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(config.mongoURI),
    AuthModule,
  ],
})
export class AppModule {}
