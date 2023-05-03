import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './userSchema';
import { CreateUserDto } from './dto/create-Item.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<User>{
    return this.userService.findOne(id) 
  }

  @Post()
  create(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userService.create(createUser);

  }

  @Delete(':id')
  delete(@Param('id') id): Promise<User> {
    return this.userService.delete(id);
  }
  @Put(':id')
  update(@Body() updateUser: User, @Param('id') id): Promise<User> {
    return this.userService.update(id, updateUser);
  }
  @Get('/filter')
  find(): Promise<User[]>{
    return this.userService.filter()
  }
}
