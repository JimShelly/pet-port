import { IUser } from '../schemas';

export interface IUsersService {
  create(createUserInput: IUser): Promise<IUser>;
  register(createUserInput: IUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findOne(id: string): Promise<IUser>;
  findByState(state: string): Promise<IUser[]>;
  update(id: string, updateUserInput: IUser): Promise<IUser>;
  remove(id: string): Promise<IUser[]>;
}
