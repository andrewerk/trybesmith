import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpException from '../shared/http.exception';
import HttpStatusCode from '../shared/http.status.code';

const loginDTO = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
}).messages({
  'any.required': '{{#label}} is required',
});

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginDTO.validate(req.body, { abortEarly: false });
  if (!error) {
    return next();
  }
  const messages = error.details.map((e) => e.message);
  throw new HttpException(HttpStatusCode.BAD_REQUEST, messages[0]);
};

export default loginValidation;