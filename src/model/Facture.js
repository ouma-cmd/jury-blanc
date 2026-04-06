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
    amount:{
        type : Number,
        required : true ,
        trim : true 
    },
    status:{
        type:String,
        required:true,
        trim : true ,
        enum :[ "unpaid", "partially_paid", "paid", "overdue" ]
    },
    dueDate:{
        type : Date
    }
});

const Facture = mongoose.model("Facture" , FactureSchema)

module.exports = Facture ;