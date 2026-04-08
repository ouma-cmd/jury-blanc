
const {
    CreatefournisseurServise , 
    readAllFournisseur,
    readsupplierById,
    ubdateSuppliers,
    deletSuppliers, }
    =require("../service/suppliersService");
const { message } = require("../util/joi");

// create
const CreatefournisseurController = async (req, res) => {
  try {
  await CreatefournisseurServise(req, res);

  } catch (error) {
    res.status(500).json({ messages: error.message });
  }
};

// get
const readAllFournisseurController = async(req,res)=>{

    try {
      await readAllFournisseur(req,res);

     
    } catch (error) {
         res.status(500).json({ messages: error.message });
    }
}

// get by id
const getsupplierById = async(req,res)=>{

    try {
        await readsupplierById(req,res);

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// ubdate 
const ubdateSupp = async(req,res)=>{
     
    try {
        await ubdateSuppliers(req,res);

    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

const deletFournisseur = async(req,res)=>{
    try {
        await deletSuppliers (req,res);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}



module.exports = {
  CreatefournisseurController,
  readAllFournisseurController,
  getsupplierById,
  ubdateSupp,
  deletFournisseur
};
