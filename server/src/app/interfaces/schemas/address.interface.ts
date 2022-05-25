import { IBase } from './base.interface';
import { Field, InputType, InterfaceType, ObjectType } from '@nestjs/graphql';

export interface IAddress extends IBase {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zip_code: string;

}

export { IAddress as AddressTypeInput, IAddress as AddressType };
