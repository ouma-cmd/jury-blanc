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

router.post("/", midllwerAutentication, suppliers, CreatefournisseurController);

router.get("/", midllwerAutentication, readAllFournisseurController);

router.get("/:id", midllwerAutentication, getsupplierById);

router.put("/:id", midllwerAutentication, ubdateSupp);

router.delete("/:id", midllwerAutentication, deletFournisseur);

module.exports = router;
