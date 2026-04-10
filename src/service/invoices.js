const express = require("express");
const invoicesse = require("../model/Facture");

// creation invoices
const creeInvoices = async (req, res) => {
  const { name, amount, description, dueDate, fournisseurId } =req.body;
  const { id } = req.user;

  const facture = await invoicesse.create({
    name,
    userId: id,
    fournisseurId,
    description,
    amount,
    dueDate,
  });
  return res.status(201).json({ facture });
};

// list All facture
const listeFacture = async (req, res) => {
  // const status = req.query.status;
  //   let query = {};
  //   query.userId = userId;
  //   if (status) {
  //     query.status = status;
  //   }
    // let facturee = await invoicesse.find(query);

  const userId = req.user.id;

  const facture = await invoicesse.find({ userId });

  return res.status(200).json(facture);
};

// list facture by Id
const listefactureById = async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;

  const facturById = await invoicesse
    .find({ userId, _id: id })
    .populate("fournisseurId", "name");

  return res.status(200).json(facturById);
};

// modifier factur
const ubdateFacture = async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;

  const ubdateFacture = await invoicesse.findOneAndUpdate(
    { userId, _id: id },
    req.body,
    { new: true },
  );
  res.status(200).json(ubdateFacture);
};

// delete facture
const deletFacture = async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;

  const deletFacture = await invoicesse.deleteOne({ userId, _id:id });

  return res.status(204).json({ message: "Facture supprimée" });
};

module.exports = {
  creeInvoices,
  listeFacture,
  listefactureById,
  ubdateFacture,
  deletFacture,
};
