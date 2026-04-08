const joi = require("joi");

const verify = joi.object({
  name: joi.string().required().min(2),
  email: joi.string().required().email(),
  password: joi.string().required().min(8).max(20)
});

module.exports = verify;
