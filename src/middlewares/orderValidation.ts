import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpException from '../shared/http.exception';
import HttpStatusCode from '../shared/http.status.code';

const orderDTO = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required(),
}).messages({
  'any.required': '{{#label}} is required',
  'any.array': '{{#label}] must be an array',
  'array.min': '{{#label}} must include only numbers',
});

const orderValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = orderDTO.validate(req.body, { abortEarly: false });
  if (!error) {
    return next();
  }
  let errorCode: keyof typeof HttpStatusCode = 'BAD_REQUEST';
  if (error.details[0].type !== 'any.required') errorCode = 'UNPROCESSABLE_ENTITY';
  const messages = error.details.map((e) => e.message);
  throw new HttpException(HttpStatusCode[errorCode], messages[0]);
};

export default orderValidation;