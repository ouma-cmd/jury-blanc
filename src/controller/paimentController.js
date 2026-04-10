const { creationPaiement , getAllPaiament } = require("../service/paiement")

const paimentcontrollerr = async(req,res)=>{
    try {
      await creationPaiement(req,res);
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};

const getallPaiament = async(req,res)=>{
    try {
        await getAllPaiament(req,res);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    paimentcontrollerr,
    getallPaiament,
    
}