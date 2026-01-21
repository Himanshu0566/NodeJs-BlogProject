import Joi, { boolean } from "joi";

export const userRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3).max(50),
  age: Joi.number().required().min(1).max(90),
  isMarried: Joi.boolean().optional(),
});
export const userUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().optional().min(3).max(50),
  age: Joi.number().optional().min(1).max(90),
  isMarried: Joi.boolean().optional(),
});
export const userLoginSchema = Joi.object({
  email: Joi.string().email().optional(),
  password: Joi.string().optional().min(3).max(50),
});
