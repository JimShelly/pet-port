import { IContact } from './contact.interface';
export interface IUser {
  firstName: string;
  lastName: string;
  userName: string;
  contactInfo: IContact[];
}
