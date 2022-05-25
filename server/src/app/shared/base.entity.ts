import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export abstract class Base {
  @Field(() => ID)
  id: string;
  @Field()
  createdBy: string;
  @Field()
  createdOn: Date;
}