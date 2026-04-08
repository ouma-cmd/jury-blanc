const { creeInvoices } = require("../service/invoices")


const creatFacture = async (req,res)=>{
    try {
        
        await creeInvoices(req,res);

    } catch (error) {
        res.status(500).json({message : error.message})
    }

}

module.exports = {
    creatFacture,
}