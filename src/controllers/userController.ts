import { Request, Response } from 'express';
import { sign, SignOptions } from 'jsonwebtoken';
import UserService from '../services/userService';
import HttpStatusCode from '../shared/http.status.code';

const jwtConfig: SignOptions = {
  expiresIn: '40m',
  algorithm: 'HS256',
};

const secret = 'jwtsecret';
class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response) => {
    const { username, id } = await this.userService.login(req.body);
    const token = sign(
      { data: { username, id } }, 
      secret,
      jwtConfig,
    );
    res.status(HttpStatusCode.OK).json({ token });
  };

  public create = async (req: Request, res: Response) => {
    const { username, id } = await this.userService.create(req.body);

    const token = sign(
      { data: { username, id } }, 
      secret,
      jwtConfig,
    );
    res.status(HttpStatusCode.CREATED).json({ token });
  };
}

export default UserController;
