const express = require ("express");
const mongoose = require("mongoose");
require("dotenv").config();

const connecteMongoose = require("./src/config/db");

connecteMongoose();

const app = express();




app.listen((process.env.PORT) , ()=>{
    console.log(`service is running`);
    
});
