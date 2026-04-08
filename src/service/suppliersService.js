const Fournisseur = require("../model/Fournisseur");
const { error } = require("../util/joi");

//creat suppliers
const CreatefournisseurServise = async (req, res) => {
  const { name, email, phone } = req.body;

  const { id } = req.user;

  const creat = await Fournisseur.create({
    name,
    email,
    phone,
    userId: id,
  });
  return res.status(201).json(creat);
};

// get suppliers
const readAllFournisseur = async (req, res) => {
  const id = req.user.id;

  const suppliers = await Fournisseur.find({ userId: id });
  return res.status(200).json(suppliers);
};

// get suppliers by ID
const readsupplierById = async (req, res) => {
  const userId = req.user.id;

  const supplierId = req.params.id;

  const findSuppliers = await Fournisseur.findOne({ userId, _id: supplierId });

  return res.status(200).json(findSuppliers);
};

// ubdate supliers
const ubdateSuppliers = async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;

  const findSuppliers = await Fournisseur.findOneAndUpdate(
    { _id: id, userId },
    req.body,
    { new: true },
  );

  return res.status(200).json(findSuppliers);
};

// delete
const deletSuppliers = async(req,res)=>{

  const userId = req.user.id;
  const id = req.params.id;

 await Fournisseur.deleteOne({_id:id , userId});

  res.status(201).json({message : "delete success "});
}

module.exports = {
  CreatefournisseurServise,
  readAllFournisseur,
  readsupplierById,
  ubdateSuppliers,
  deletSuppliers,
};
