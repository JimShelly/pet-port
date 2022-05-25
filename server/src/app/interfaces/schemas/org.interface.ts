import { IAddress } from 'src/app/interfaces/schemas/address.interface';
import { IContact } from './contact.interface';

export interface IOrg {
  name: string;
  contact?: [IContact];
  address: IAddress;
}