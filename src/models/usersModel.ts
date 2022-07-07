import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User, AddUser } from '../interfaces/user';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: AddUser): Promise<User> {
    const { username, classe, level, password } = user;
    const result = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const [row] = result;
    const { insertId: id } = row;
    return { username, id };
  } 
}
