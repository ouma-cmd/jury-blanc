const { verify , sign } = require("jsonwebtoken");

require("dotenv").config();

const signn = (payload)=>{
    return sign(payload , process.env.SECRET_KEY_ACCESS_TOKEN)
}

const verifyy = (token)=>{
    return verify (token , process.env.SECRET_KEY_ACCESS_TOKEN)
}

module.exports = {
    signn ,
    verifyy
}


