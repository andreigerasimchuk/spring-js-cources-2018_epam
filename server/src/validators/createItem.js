const Joi = require('joi');

const schema = Joi.object().keys({
  title: Joi.string().min(1).required(),
  description: Joi.string().min(0),
});

const validateCreateItem = (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).json(result.error);
  }
  next();
}

module.exports = validateCreateItem;