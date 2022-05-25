import { IAddress } from 'src/app/interfaces/schemas/address.interface';
import { Field, InputType, ObjectType, Resolver } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Base } from '../shared/base.entity';

@Schema()
@InputType('AddressTypeInput')
@ObjectType('AddressType')
@Resolver(() => Address)
export class Address extends Base implements IAddress {
  @Prop()
  @Field(() => String)
  street1: string;
  @Field(() => String)
  street2?: string;
  @Field(() => String)
  city: string;
  @Field(() => String)
  state: string;
  @Field(() => String)
  zip_code: string;

  toString() {
    return `${this.street1}, ${this.city}, ${this.state}, ${this.zip_code}`;
  }
}

export { Address as AddressType };
export { Address as AddressTypeInput };
