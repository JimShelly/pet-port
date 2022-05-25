import {
  Field,
  Float,
  InputType,
  InterfaceType,
  ObjectType,
} from '@nestjs/graphql';
import { Base } from '../../shared/base.entity';
import { Location_Type } from '../../shared/common.enum';

export interface ILocation {
  latitude?: number;
  longitude?: number;
  locationType: Location_Type;
  order?: number;
}
