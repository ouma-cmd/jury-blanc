const joi = require("joi");
const { default: mongoose } = require("mongoose");

const Invoicessvalider = joi.object({
  name: joi.string().required(),
  amount: joi.number().required().min(0),
  status: joi.string().required(),
  description: joi.string(),
  dueDate: joi.number().required(),
  fournisseurId: mongoose.isValidObjectId(),
});

module.exports = Invoicessvalider;
