const express = require("express");

require("dotenv").config();

const connecteMongoose = require("./src/config/db");
const routeauthentification = require("./src/router/authentificationRouter");
const routerSuppliers = require("./src/router/suppliersRouter");
const routeInvoucess = require("./src/router/invoicess");
const routerPaiment = require("./src/router/paimentRouter");

connecteMongoose();

const app = express();

app.use(express.json());

console.log("testing git");
console.log("test 2");

app.use("/api/auth", routeauthentification);

app.use("/api/suppliers", routerSuppliers);

app.use("/api/invoices", routeInvoucess);

app.use("/api/invoices", routerPaiment);

app.listen(process.env.PORT, () => {
  console.log(`service is running`, process.env.PORT);
});
