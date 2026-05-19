export const validateBody = (schema) => {
  return (req, res, next) => {
    let { error } = schema.validateBody(req.body);
  };
};
