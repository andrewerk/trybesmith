import { OkPacket, Pool, ResultSetHeader } from 'mysql2/promise';
import { User, AddUser } from '../interfaces/user';
import { Login } from '../interfaces/login';
import HttpException from '../shared/http.exception';
import HttpStatusCode from '../shared/http.status.code';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(userLogin: Login): Promise<User> {
    const { username, password } = userLogin;
    const [result] = await this.connection.execute<OkPacket[] & User>(
      'SELECT id, username FROM Trybesmith.Users WHERE username = ? and password = ?',
      [username, password],
    );
    if (result.length === 0) {
      throw new HttpException(HttpStatusCode.UNAUTHORIZED, 'Username or password invalid');
    }
    return JSON.parse(JSON.stringify(result))[0];
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
