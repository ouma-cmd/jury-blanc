const joi = require("joi");

const validerPaiement = joi.object({
    amount: joi.number().required(),
    note : joi.string(),
    mode_paiement:joi.string().valid("espèces", "chèque", "virement").required()
})
module.exports = validerPaiement;