import { Field, InputType, ObjectType, Resolver } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { IContact } from '../interfaces/schemas';
import { Base } from '../shared/base.entity';
import { Contact_Type } from '../shared/common.enum';

@Schema()
@InputType('ContactTypeInput')
@ObjectType('ContactType')
@Resolver(() => Contact)
export class Contact extends Base implements IContact {
  @Prop()
  @Field(() => String)
  contactValue: string;
  @Prop()
  @Field(() => Contact_Type)
  contactType: Contact_Type;
  @Prop()
  @Field(() => Boolean)
  primary: boolean;

  toString() {
    return `${this.contactType} ${this.contactValue} ${this.primary}`;
  }
}

export { Contact as ContactType };
export { Contact as ContactTypeInput };