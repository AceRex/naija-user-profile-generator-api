import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  firstname: string;

  @Prop()
  middlename: string;

  @Prop()
  lastname: string;

  @Prop()
  placeOfBirth: string;

  @Prop()
  gender: string;

  @Prop()
  dob: Date;

  @Prop()
  maritalStatus: string;

  @Prop()
  maidenName: string;

  @Prop()
  religion: string;

  @Prop(
    raw({
      typeofwork: { type: String },
      officeAddress: { type: String },
      officeEmail: { type: String },
      officePhoneNumber: { type: Number || String },
    }),
  )
  employmentStatus: Record<string, any>;

  @Prop(
    raw({
      highestLevel: { type: String },
      youthService: { type: String },
      yearOfService: { type: String },
      placeOfService: { type: String },
    }),
  )
  education: Record<string, any>;

  @Prop(
    raw({
      address: { type: String, },
      lGA: { type: String },
      townOrCity: { type: String },
      state: { type: String },
      country: { type: String },
    }),
  )
  location: Record<string, any>;

  @Prop(
    raw({
      state: { type: String },
      lGA: { type: String },
      townCity: { type: String },
      country: { type: String },
    }),
  )
  stateOfOrigin: Record<string, any>;

  @Prop(
    raw({
      phoneNumber: { type: Number },
      email: { type: String },
      idNumber: { type: Number },
    }),
  )
  details: Record<string, any>;

  @Prop(
    raw({
      name: { type: String },
      address: { type: String },
      phonenumber: { type: Number || String },
      relationship: { type: String },
      state: { type: String },
      country: { type: String },
      email: { type: String },
    }),
  )
  beneficiary: Record<string, any>;
}

export const UserSchema = SchemaFactory.createForClass(User);
