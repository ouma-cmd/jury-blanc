const joi = require("joi");

const validerPaiement = joi.object({
    amount: joi.number().required().min(0),
    note : joi.string(),
    mode_paiement:joi.string().required(),
})
module.exports = validerPaiement;