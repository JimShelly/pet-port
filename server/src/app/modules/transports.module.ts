import { MongooseModule } from '@nestjs/mongoose';
import { Transport, TransportSchema } from '../models/transport.model';
import { Module } from '@nestjs/common';
import { TransportsService } from '../services/transports.service';
import { TransportsResolver } from '../resolvers/transports.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Transport.name,
        schema: TransportSchema,
      },
    ]),
  ],
  providers: [TransportsResolver, TransportsService],
})
export class TransportsModule {}
