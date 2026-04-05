const mongoose = require("mongoose");
require("dotenv").config();

const connected = ()=>{

const connectMongoose = mongoose.connect(process.env.MONGO_URI);

if(connectMongoose){
    console.log("connect");
    
}else{
    console.log("not connected");   
}
}

module.exports = connected;