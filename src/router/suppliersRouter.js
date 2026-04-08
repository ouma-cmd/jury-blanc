const express = require("express");
const midllwerAutentication = require("../middleware/autentification");
const suppliers = require("../middleware/supplierMidll");
const {
  CreatefournisseurController,
  readAllFournisseurController,
  getsupplierById,
  ubdateSupp,
  deletFournisseur,
  
} = require("../controller/suppliersController");


const router = express.Router();

router.post("/suppliers", midllwerAutentication, suppliers, CreatefournisseurController,);

router.get("/suppliers",midllwerAutentication , readAllFournisseurController);

router.get("/suppliers/:id", midllwerAutentication ,getsupplierById );

router.put("/suppliers/:id" , midllwerAutentication , ubdateSupp);

router.delete("/suppliers/:id", midllwerAutentication , deletFournisseur)

module.exports = router;
