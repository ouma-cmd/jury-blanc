const Facture = require("../model/Facture");
const paiement = require("../model/paiement");



// creation paiement
const creationPaiement = async()=>{
    const userId = req.user.id;
    const invoicesId = req.params.id;

    const {amount, note,mode_paiement}=req.body;

    const factur = await Facture.findById(invoicesId);

    factur.amount = factur.amount - amount;

    await factur.save()



    const creationPaiement = await paiement.create({
        invoicesId : invoicesId,
        userId : userId,
        fournisseurId : factur.fournisseurId,
        amount,        
        note,
        mode_paiement
    })

}