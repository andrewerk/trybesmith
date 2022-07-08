import { NextFunction, Request, Response } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import HttpException from '../shared/http.exception';
import HttpStatusCode from '../shared/http.status.code';

const secret = 'jwtsecret';

const verifyToken = async (token: string | undefined): Promise<string | JwtPayload> => {
  if (!token) {
    throw new HttpException(HttpStatusCode.UNAUTHORIZED, 'Token not found');
  }
  try {
    const payload = verify(token, secret);
    return payload;
  } catch (error) {
    throw new HttpException(HttpStatusCode.UNAUTHORIZED, 'Invalid token');
  }
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const payload = await verifyToken(token);
  res.locals.user = payload;
  next();
};

export default validateToken;