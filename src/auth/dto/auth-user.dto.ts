import { IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';

export class AuthUserDto {
  @IsEmail({}, {message: "Please enter a correct email"})
  @IsNotEmpty()
  email: string;


  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
