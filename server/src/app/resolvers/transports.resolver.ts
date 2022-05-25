import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TransportsService } from '../services/transports.service';
import {
  Transport,
  TransportType,
  TransportTypeInput,
} from 'src/app/models/transport.model';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Resolver(() => TransportType)
export class TransportsResolver {
  constructor(private readonly transportsService: TransportsService) {}

  @Mutation(() => Transport)
  createTransport(
    @Args('createTransportInput') createTransportInput: TransportTypeInput,
  ): Promise<Transport> {
    return this.transportsService.create(createTransportInput);
  }

  @Query(() => [Transport], { name: 'transports' })
  @UseGuards(AuthGuard('bearer'))
  findAll() {
    return this.transportsService.findAll();
  }

  @Query(() => Transport, { name: 'transport' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.transportsService.findOne(id);
  }

  @Mutation(() => Transport)
  updateTransport(
    @Args('updateTransportInput') updateTransportInput: Transport,
  ) {
    return this.transportsService.update(
      updateTransportInput.id,
      updateTransportInput,
    );
  }

  @Mutation(() => Transport)
  removeTransport(@Args('id', { type: () => ID }) id: string) {
    return this.transportsService.remove(id);
  }
}
