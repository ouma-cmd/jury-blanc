const mongoose = require("mongoose");

const FactureSchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId
    },
    fournisseurId:{
        type : mongoose.Schema.Types.ObjectId
    },
    description:{
        type:String
    },
    amount:{
        type : Number,
        required : true ,
        trim : true 
    },
    status:{
        type:String,
        required:true,
        trim : true ,
        enum :[ "unpaid", "partially_paid", "paid" ],
        default: "unpaid"
    },
    dueDate:{
        
    }
    
},{timestamps:true});

const Facture = mongoose.model("Facture" , FactureSchema)

module.exports = Facture ;