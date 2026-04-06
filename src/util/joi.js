const joi = require ("joi");

const verify = joi.object({
    name: joi.string().required(),
    email : joi.string().required().email(),
    password : joi.string().required().min(5).max(20),
    confirmePassword : joi.ref("password"),
})

module.exports = verify ;