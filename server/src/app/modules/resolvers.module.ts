import { UsersService, TransportsService } from './../services';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TransportsResolver } from '../resolvers/transports.resolver';
import { Transport, TransportSchema, User, UserSchema } from '../models';
import { UsersResolver } from '../resolvers';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Transport.name,
        schema: TransportSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [
    TransportsResolver,
    TransportsService,
    UsersResolver,
    UsersService,
  ],
})
export class ResolversModule {}
