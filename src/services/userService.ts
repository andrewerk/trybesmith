import connection from '../models/connection';
import UserModel from '../models/usersModel';
import { AddUser, User } from '../interfaces/user';
import { Login } from '../interfaces/login';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async login(userLogin: Login): Promise<User> {
    const result = await this.model.login(userLogin);
    return result;
  }

  public async create(user: AddUser): Promise<User> {
    const result = await this.model.create(user);
    return result;
  }
}