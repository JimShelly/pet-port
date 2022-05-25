import { Field, InputType, ObjectType, Resolver } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ILocation, ITransport } from '../interfaces/schemas';
import { Base } from '../shared/base.entity';
import { Location } from './location.model';

@Schema()
@InputType('TransportTypeInput')
@ObjectType('TransportType')
@Resolver(() => Transport)
class Transport extends Base implements ITransport {
  @Prop()
  @Field(() => String)
  name: string;
  @Prop()
  @Field(() => String)
  description?: string;
  @Prop()
  @Field(() => Date)
  departureDate: Date;
  @Prop()
  @Field(() => Date)
  arrivalDate?: Date;
  @Prop()
  @Field(() => [Location])
  locations?: ILocation[];
}

export const TransportSchema = SchemaFactory.createForClass(Transport);
export {
  Transport,
  Transport as TransportTypeInput,
  Transport as TransportType,
};