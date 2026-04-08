const { required } = require("joi");
const mongoose = require("mongoose");

const FournisseurSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type: Number,
    },
    email:{
        type : String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref : "user",
    },
  
});

const Fournisseur = mongoose.model("Fournisseur",FournisseurSchema)

module.exports = Fournisseur;