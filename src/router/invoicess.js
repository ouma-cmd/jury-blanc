const express = require("express");
const { creatFacture, listeAllFacture, listefuctureById, modifierFacture, supprimerFacture } = require("../controller/invoicess");
const midllwerAutentication = require("../middleware/autentification");
const invaliderInvoicess = require("../middleware/invoicess");

const routeInvoucess = express.Router();

routeInvoucess.post("/",midllwerAutentication , invaliderInvoicess , creatFacture);

routeInvoucess.get("/",midllwerAutentication , listeAllFacture );

routeInvoucess.get("/:id",midllwerAutentication , listefuctureById );

routeInvoucess.put("/:id",midllwerAutentication ,invaliderInvoicess , modifierFacture );

routeInvoucess.delete("/:id",midllwerAutentication,supprimerFacture);

module.exports = routeInvoucess;
