export class User {
   id?: number;
   firstName: string;
   lastName: string;
   username: string;
   password: string;
  confirmPassword: string;
   email: string;
  phoneNumber: string;
  activated: boolean;
  primaryAccount: Account;
  savingsAccount: Account;

}
