const validerPaiement = require("../util/joiPaiement");
const joiSuppliers = require("../util/joisuppliers");


const paimentMidlleware = async(req,res,next)=>{

    const {amount, note, mode_paiement} = req.body;
    
    const {err} = validerPaiement.validate({amount, note, mode_paiement});

    if(err){
        res.status(404).json({message:err.message})
    }
    next();
}

module.exports = paimentMidlleware;