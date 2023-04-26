import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./userSchema";
import { CreateUserDto } from "./dto/create-Item.dto";

@Controller('user')
export class UserController{
    constructor (private readonly userService: UserService){}

    @Get()
    async findAll() : Promise<User[]>{
        return await this.userService.findAll()
    }

    @Post()
    create(@Body() createUser: CreateUserDto): Promise<User>{
        return this.userService.create(createUser)
    }
}