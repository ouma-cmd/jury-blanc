const joi = require("../util/joisuppliers");

const suppliers = async (req,res ,next)=>{
    const {name , phone , email } = req.body;

    const {err} = joi.validate({name,phone , email});

    if(err){
        return res.send(err);
    }
    next();
}

module.exports = suppliers ; 