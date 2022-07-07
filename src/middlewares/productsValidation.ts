import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpException from '../shared/http.exception';
import HttpStatusCode from '../shared/http.status.code';

const productDTO = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
}).messages({
  'any.required': '{{#label}} is required',
  'any.string': '{{#label}} must be a string',
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
});

const addProductValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productDTO.validate(req.body, { abortEarly: false });
  console.log(error);
  if (!error) {
    return next();
  }
  let errorCode: keyof typeof HttpStatusCode = 'BAD_REQUEST';
  if (error.details[0].type !== 'any.required') errorCode = 'UNPROCESSABLE_ENTITY';
  const messages = error.details.map((e) => e.message);
  throw new HttpException(HttpStatusCode[errorCode], messages[0]);
};

export default addProductValidation;