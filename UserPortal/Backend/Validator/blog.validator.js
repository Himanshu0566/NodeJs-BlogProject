import Joi, { optional } from "joi";

export const addBlogSchema = Joi.object({
  title: Joi.string().required().trim(),
  description: Joi.string().required().trim(),
  category: Joi.string().required().valid().message("Not a valid catogery"),
  tags: Joi.string().optional(),
});

export const updateBlogSchema=Joi.object({
  title:Joi.string().required().trim().optional()
})