const Facture = require("../model/Facture");
const paiement = require("../model/paiement");

// creation paiement
const creationPaiement = async (req, res) => {
  const userId = req.user.id;
  const invoicesId = req.params.id;
  const { amount, note, mode_paiement } = req.body;

   const factur = await Facture.findById(invoicesId);
  // calcul factur amount
  factur.somme = factur.amount - amount;

//   somme de tout amount
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
return res.status(201).json(creationPaiementt)

};

module.exports = {
    creationPaiement,
} ;
