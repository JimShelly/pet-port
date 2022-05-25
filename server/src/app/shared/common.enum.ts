import { registerEnumType } from '@nestjs/graphql';

export enum Location_Type {
  ORIGIN = 'origin',
  DESTINATION = 'destination',
  BUSINESS = 'business',
  PERSONAL = 'personal',
  ENDOFLEG = 'end_of_leg',
}

export enum Contact_Type {
  CELL = 'cell',
  HOME = 'home',
  FAX = 'fax',
  WORK = 'work',
  HOME_EMAIL = 'home_email',
  WORK_EMAIL = 'work_email',
}
registerEnumType(Location_Type, { name: 'Location_Type' });
registerEnumType(Contact_Type, { name: 'Contact_Type' });