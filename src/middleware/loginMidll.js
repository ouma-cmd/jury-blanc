const joi = require("../util/joi");

const loginMiddl = (req,res,next)=>{

    const {email,password} = req.body;

    const { err } = joi.validate({email,password});

    if(err){
        res.send(err);
    }

next();
}

module.exports = loginMiddl;