import { Injectable } from '@nestjs/common';
import { AuthUserDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserAuth } from './schema/auth.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserAuth.name)
    private userModel: Model<UserAuth>,
    private jwtService: JwtService
  ) {}

  async signin(dto: AuthUserDto) {
    return 'Hello I am signed In';
  }

  async signup(dto: AuthUserDto): Promise<{token: string}> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.userModel.create(
      dto.email,
      (dto.password = hashedPassword),
    );
    const token = this.jwtService.sign({id: user});
    return {token};
  }
}
