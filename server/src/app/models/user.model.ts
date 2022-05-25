import { Field, InputType, ObjectType, Resolver } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IContact, IUser } from '../interfaces/schemas';
import { Base } from '../shared/base.entity';
import { Contact } from './contact.model';

@Schema()
@InputType('UserTypeInput')
@ObjectType('UserType')
@Resolver(() => User)
class User extends Base implements IUser {
  @Prop()
  @Field(() => String)
  firstName: string;
  @Prop()
  @Field(() => String)
  lastName: string;
  @Prop({ unique: true })
  @Field(() => String)
  userName: string;
  @Prop()
  @Field(() => [Contact])
  contactInfo: IContact[];
}

export const UserSchema = SchemaFactory.createForClass(User);
export { User, User as UserTypeInput, User as UserType };
