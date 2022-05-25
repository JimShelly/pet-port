import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { User, UserType, UserTypeInput } from 'src/app/models';
import { IUser } from '../interfaces/schemas';
import { UsersService } from '../services';

@Resolver(() => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: UserTypeInput,
  ): Promise<IUser> {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => User)
  registerUser(
    @Args('createUserInput') createUserInput: UserTypeInput,
  ): Promise<IUser> {
    return this.usersService.register(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }
}
