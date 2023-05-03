import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './userSchema';
import { CreateUserDto } from './dto/create-Item.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }
  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({_id: id});
  }
  async create(createUserdto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserdto);
    return await newUser.save();
  }

  async delete(id: string) : Promise<User>{
    return await this.userModel.findByIdAndRemove(id)
  }

  async update(id: string, user: User): Promise<User>{
    return await this.userModel.findByIdAndUpdate(id, user, {new: true})
  }

  async filter(): Promise<User[]>{
    return await this.userModel.find(User[2])
  }
}
