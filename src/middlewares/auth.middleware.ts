import { NextFunction, Request, Response } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import HttpException from '../shared/http.exception';
import HttpStatusCode from '../shared/http.status.code';

const secret = 'jwtsecret';

const verifyToken = (token: string | undefined): JwtPayload | string => {
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

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string || undefined;
  const payload = verifyToken(token);
  res.locals.user = payload;
  next();
};

export default validateToken;