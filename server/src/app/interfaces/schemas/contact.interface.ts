import { Contact_Type } from '../../shared/common.enum';
import { IBase } from './base.interface';

export interface IContact extends IBase {
  contactValue: string;
  contactType: Contact_Type;
  primary: boolean;
}