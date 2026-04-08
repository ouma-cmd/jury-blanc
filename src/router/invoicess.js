const express = require("express");
const { creatFacture } = require("../controller/invoicess");
const midllwerAutentication = require("../middleware/autentification");

const routeInvoucess = express.Router();

routeInvoucess.post("/invoices",midllwerAutentication, creatFacture);

module.exports = routeInvoucess