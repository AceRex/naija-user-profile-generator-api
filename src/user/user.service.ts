import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{

    findAll(): string{
        return 'This is all you can find here for now'
    }
}