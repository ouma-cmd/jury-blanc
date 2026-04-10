const mongoose = require("mongoose");
const suppliers = require("../middleware/supplierMidll");

const FactureSchema = mongoose.Schema(
  {
    name:{
        type:String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"user"
    },
    fournisseurId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Fournisseur"
    },
    description: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      enum: ["unpaid", "partially_paid", "paid"],
      default: "unpaid",
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const Facture = mongoose.model("Facture", FactureSchema);

module.exports = Facture;
