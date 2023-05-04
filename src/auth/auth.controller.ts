import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService){}

//   @Get('/signin')
//   findAll(dto): string {
//     return this.authService.signin(dto);
//   }

  @Post('signup')
  signup(@Body() dto: AuthUserDto): Promise<{token: string}>{
    console.log(dto)
    return this.authService.signup(dto);
  }
}
