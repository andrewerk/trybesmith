import connection from '../models/connection';
import UserModel from '../models/usersModel';
import { AddUser, User } from '../interfaces/user';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: AddUser): Promise<User> {
    const result = await this.model.create(user);
    return result;
  }
}