const validerPaiement = require("../util/joiPaiement");
const joiSuppliers = require("../util/joisuppliers");


const paimentMidlleware = async(req,res,next)=>{

    const {amount, note, mode_paiement} = req.body;
    
    const {err} = validerPaiement.validate({amount, note, mode_paiement});

    if(err){
       return res.status(422).json({message:err.message})
    }
    next();
}

module.exports = paimentMidlleware;