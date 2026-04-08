const joi = require("joi");

const joiSuppliers =joi.object({
     
        name : joi.string().required(),
        phone : joi.string().required(),
        email : joi.string().required(),

    })

    module.exports = joiSuppliers ;
