const Joi = require('joi');

const schema = Joi.object().keys({
  _id: Joi.string().min(1).required(),
});

const validateGetItem = (req, res, next) => {
  const result = Joi.validate(req.params, schema);
  if (result.error) {
    return res.status(400).json(result.error);
  }
  next();
}

module.exports = validateGetItem;