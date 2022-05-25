import {
  Field,
  Float,
  InputType,
  Int,
  ObjectType,
  Resolver,
} from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { ILocation } from '../interfaces/schemas';
import { Base } from '../shared/base.entity';
import { Location_Type } from '../shared/common.enum';

@Schema()
@InputType('LocationTypeInput')
@ObjectType('LocationType')
@Resolver(() => Location)
export class Location extends Base implements ILocation {
  @Prop()
  @Field(() => Float, { nullable: true })
  latitude?: number;
  @Prop()
  @Field(() => Float, { nullable: true })
  longitude?: number;
  @Prop()
  @Field(() => Location_Type)
  locationType: Location_Type;
  @Prop()
  @Field(() => Int)
  order?: number;
}
