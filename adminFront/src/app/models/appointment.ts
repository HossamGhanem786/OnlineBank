import {User} from './user';

export class Appointment {
  id: number;
  date: Date;
  confirmed: boolean;
  description: string;
  user: User;
  location: string;
}
