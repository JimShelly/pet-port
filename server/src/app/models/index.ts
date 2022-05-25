import {
  Transport,
  TransportSchema,
  TransportType,
  TransportTypeInput,
} from './transport.model';
import { User, UserType, UserTypeInput, UserSchema } from './user.model';
import { Address, AddressType } from './address.model';
import { Contact, ContactType, ContactTypeInput } from './contact.model';
// This file collects all the models and exports them
// for easier and cleaner imports of models into other
// components.
export { Address, AddressType };
export { Transport, TransportType, TransportTypeInput, TransportSchema };
export { User, UserType, UserTypeInput, UserSchema };
export { Contact, ContactType, ContactTypeInput };