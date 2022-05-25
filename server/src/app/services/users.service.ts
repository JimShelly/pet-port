import { IUsersService } from './../interfaces/services';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserTypeInput } from '../models';
import { IUser } from '../interfaces/schemas';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<IUser>,
  ) {}

  create(createUserInput: UserTypeInput): Promise<IUser> {
    const user = new this.userModel(createUserInput);
    return user.save();
  }

  register(createUserInput: UserTypeInput): Promise<IUser> {
    return this.create(createUserInput);
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    const users = this.userModel.findById(id).exec();

    return users;
  }

  findByState(state: string) {
    const users = this.userModel.find({ state: state }).exec();

    if (!users) {
      throw new NotFoundException(
        `Transports not found for the state of ${state}`,
      );
    }
    return users;
  }

  async update(id: string, updateUserInput: UserTypeInput) {
    try {
      const user = await this.userModel
        .findOneAndUpdate({ _id: id }, { $set: updateUserInput })
        .exec();

      if (!user) {
        throw new NotFoundException(`Transport ${id} not found`);
      }
      return user;
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return user.remove();
  }
}
