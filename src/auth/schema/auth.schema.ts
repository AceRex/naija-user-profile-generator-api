import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({
    timestamps: true
})

export class UserAuth{

    @Prop()
    name: string

    @Prop({unique: [true, 'Email already exist']})
    email: string

    @Prop()
    password: string
}

export const AuthSchema = SchemaFactory.createForClass(UserAuth)