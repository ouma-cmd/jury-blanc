const Invoicessvalider = require("../util/joiInvoicess");


const invaliderInvoicess = async ()=>{
    const {name,amount,status,description , dueDate}=req.body;

    const {err} = Invoicessvalider.validate({name,amount,status,description , dueDate)
}