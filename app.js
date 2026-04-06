const express = require ("express");

require("dotenv").config();

const connecteMongoose = require("./src/config/db");
const routeauthentification = require("./src/router/authentificationRouter")

connecteMongoose();

const app = express();

app.use (express.json())

app.use("/api/auth" , routeauthentification);

app.listen((process.env.PORT) , ()=>{
    console.log(`service is running`,process.env.PORT);
    
});
