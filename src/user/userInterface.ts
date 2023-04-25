export interface User {
  userDetails: {
    image: string;
    title: string;
    firstname: string;
    middlename?: string;
    lastname: string;
    placeOfBirth: string;
    gender: string;
    dob: Date;
    maritalStatus: string;
    maidenName: string;
    religion: string;
  employmentStatus: {
    typeofwork: string;
    officeAddress: string;
    officeEmail: string;
    officePhoneNumber: number;
  };
  education: {
    highestLevel: string;
    youthService: string;
    yearOfService: string;
    placeOfService: string;
  };
  location: {
    address: string;
    lGA: string;
    townOrCity: string;
    state: string;
    country: string;
  };
  stateOfOrigin: {
    state: string;
    lGA: string;
    townCity: string;
    country: string;
  };
  details: {
    phoneNumber: string;
    email: string;
    idNumber: string;
  };
  beneficiary: {
    name: string;
    address: string;
    phonenumber: string;
    relationship: string;
    state: string;
    country: string;
    email: string;
  };  
};
}
