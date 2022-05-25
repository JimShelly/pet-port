import { Injectable, NotFoundException } from '@nestjs/common';
import { Transport, TransportTypeInput } from '../models/transport.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TransportsService {
  constructor(
    @InjectModel(Transport.name)
    private readonly transportModel: Model<Transport>,
  ) {}

  create(createTransportInput: TransportTypeInput): Promise<Transport> {
    const transport = new this.transportModel(createTransportInput);
    return transport.save();
  }

  findAll() {
    return this.transportModel.find();
  }

  findOne(id: string) {
    const transports = this.transportModel.findById(id).exec();

    return transports;
  }

  findByState(state: string) {
    const transports = this.transportModel.find({ state: state }).exec();

    if (!transports) {
      throw new NotFoundException(
        `Transports not found for the state of ${state}`,
      );
    }
    return transports;
  }
  async update(id: string, updateTransportInput: TransportTypeInput) {
    try {
      const existingTransport = await this.transportModel
        .findOneAndUpdate({ _id: id }, { $set: updateTransportInput })
        .exec();

      if (!existingTransport) {
        throw new NotFoundException(`Transport ${id} not found`);
      }
      return existingTransport;
    } catch(error) {
      console.log('Error', error);
    }
  }

  async remove(id: string) {
    try {
      const transport = await this.findOne(id);
      return transport.remove();
    } catch (error) {
      console.log('Error', error);
    }
  }
}
