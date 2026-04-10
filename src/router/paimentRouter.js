const express = require("express");
const midllwerAutentication = require("../middleware/autentification");
const paimentMidlleware = require("../middleware/paimentMiddl");
const midllPaiment = require("../middleware/checkePament");
const { paimentcontrollerr, getallPaiament } = require("../controller/paimentController");
const routerPaiment = express.Router();

routerPaiment.post("/:id/payments",midllwerAutentication,paimentMidlleware,midllPaiment,paimentcontrollerr);

routerPaiment.get("/:id/payments" , midllwerAutentication,getallPaiament)

module.exports = routerPaiment;