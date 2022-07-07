import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpException from '../shared/http.exception';
import HttpStatusCode from '../shared/http.status.code';

const userDTO = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
}).messages({
  'any.required': '{{#label}} is required',
  'any.string': '{{#label}} must be a string',
  'any.number': '{{#label}} must be a number',
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
  'number.min': '{{#label}} must be greater than or equal to {{#limit}}',
});

const addUserValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userDTO.validate(req.body, { abortEarly: false });
  console.log(error);
  if (!error) {
    return next();
  }
  let errorCode: keyof typeof HttpStatusCode = 'BAD_REQUEST';
  if (error.details[0].type !== 'any.required') errorCode = 'UNPROCESSABLE_ENTITY';
  const messages = error.details.map((e) => e.message);
  throw new HttpException(HttpStatusCode[errorCode], messages[0]);
};

export default addUserValidation;