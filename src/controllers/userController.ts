import { Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import UserService from '../services/userService';
import HttpStatusCode from '../shared/http.status.code';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const { username, id } = await this.userService.create(req.body);
    const secret = 'jwtsecret';

    const token = Jwt.sign(
      { data: { username, id } }, 
      secret,
      {
        expiresIn: '7d',
        algorithm: 'HS256',
      },
    );
    res.status(HttpStatusCode.CREATED).json({ token });
  };
}

export default UserController;
