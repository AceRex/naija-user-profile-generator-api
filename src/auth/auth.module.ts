import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './schema/auth.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/userSchema';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES'),
          }
        };
      },
    }),
    MongooseModule.forFeature([{ name: 'Profile', schema: AuthSchema }]),
  ],
  // controllers: [AuthController],
  // providers: [AuthService],
})
export class AuthModule {}
