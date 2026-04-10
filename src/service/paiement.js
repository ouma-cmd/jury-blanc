const Facture = require("../model/Facture");
const paiement = require("../model/paiement");
const paiement = require("../model/paiement");

// creation paiement
const creationPaiement = async (req, res) => {
  const userId = req.user.id;
  const invoicesId = req.params.id;
  const { amount, note, mode_paiement } = req.body;

   const factur = await Facture.findById(invoicesId);

  // calcul factur amount
if(factur.amount - amount < 0){
return res.status(400).json("amount <0")
}
  factur.amount = factur.amount - amount;
  

//  somme de tout amount
const totalAmount= await paiement.aggregate([
    {$match : {invoicesId:factur.id}},
    {$group : {_id:invoicesId , totalPaiment :{$sum:"amount"}}}
]);

const totalPaiment = totalAmount.length>0 ? totalAmount[0].totalAmount :0


  //  checke status
  if (totalPaiment+amount === factur.amount) {
    factur.status = "paid";
  }
  if (amount < factur.amount) {
    factur.status = "partially_paid";
  }

  await factur.save();

  // cration
  const creationPaiementt = await paiement.create({
    invoicesId: invoicesId,
    userId: userId,
    fournisseurId: factur.fournisseurId,
    amount,
    note,
    mode_paiement,
  });
return res.status(201).json({creationPaiementt,factur})

};


const getAllPaiament = async(req,res)=>{
  const id = req.user.id;
  const id_P = req.params.id;

const paiement = await paiement.find({id , _id: id_P})
  return res.status(200).json(paiement)

}

module.exports = {
    creationPaiement,
    getAllPaiament
} ;
