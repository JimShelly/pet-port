import { ILocation } from './location.interface';

export interface ITransport {
  name: string;
  description?: string;
  departureDate: Date;
  arrivalDate?: Date;
  locations?: ILocation[];
}