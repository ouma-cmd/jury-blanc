const Facture = require("../model/Facture");


const midllPaiment = async(req,res,next)=>{
    const invoicesId = req.params.id;
    const amount = req.body
     const factur = await Facture.findById(invoicesId);
  if (!factur) {
    return res.status(404).json({ message: "not find" });
  }
//   somme de tout amount
const totalAmount= await paiement.aggregate([
    {$match : {invoicesId:factur._id}},
    {$group : {_id:invoicesId , totalPaiment :{$sum:"amount"}}}
]);

const totalPaiment = totalAmount.length>0 ? totalAmount[0].totalAmount :0

  if (totalPaiment + amount > factur.amount) {
        return res.status(400).json({
            message: "Total payments exceed invoice amount",
        });
    }


  // checke amount
     if (amount > factur.amount) {
    return res.statust(404).json({ message: "amount big" });
  }
  next();
}

module.exports = midllPaiment ;