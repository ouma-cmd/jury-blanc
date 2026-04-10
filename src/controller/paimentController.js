const { creationPaiement } = require("../service/paiement")

const paimentcontrollerr = async(req,res)=>{
    try {
      await creationPaiement(req,res);
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};
module.exports = {
    paimentcontrollerr,
    
}