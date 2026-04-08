const joi = require("joi");


const Invoicessvalider = joi.object({
    name:joi.string().required(),
    amount:joi.number().required().min(0),
    status: joi.string().required(),
    description:joi.string(),
    dueDate:joi.number().required()

})

module.exports = Invoicessvalider;