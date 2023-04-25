import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    userDetails: {
        image: String,
        title: String,
        firstname: String,
        middlename: String,
        lastname: String,
        placeOfBirth: String,
        gender: String,
        dob: Date,
        maritalStatus: String,
        maidenName: String,
        religion: String,
      employmentStatus: {
        typeofwork: String,
        officeAddress: String,
        officeEmail: String,
        officePhoneNumber: Number,
      },
      education: {
        highestLevel: String,
        youthService: String,
        yearOfService: String,
        placeOfService: String,
      },
      location: {
        address: String,
        lGA: String,
        townOrCity: String,
        state: String,
        country: String,
      },
      stateOfOrigin: {
        state: String,
        lGA: String,
        townCity: String,
        country: String,
      },
      details: {
        phoneNumber: String,
        email: String,
        idNumber: String,
      },
      beneficiary: {
        name: String,
        address: String,
        phonenumber: String,
        relationship: String,
        state: String,
        country: String,
        email: String,
      },  
    },
  });