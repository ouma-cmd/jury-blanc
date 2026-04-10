const { required } = require("joi");
const mongoose = require("mongoose");

const paiementSchema = new mongoose.Schema({
    invoicesId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Facture"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    fournisseurId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Fournisseur"
    },
    amount:{
        type:Number,
        required:true,
        trim:true,
    },
    paymentDate:{
        type : Date,
        default:Date.now(),
    
    },
    note:{
        type:String
    },
     mode_paiement:{
        type :String,
        required:true,
        enum:["espèces","chèque","virement"]
     }
},{timestamps:true})

const paiement = mongoose.model("paiement" ,paiementSchema);
module.exports = paiement;