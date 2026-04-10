const {
  creeInvoices,
  listeFacture,
  listefactureById,
  ubdateFacture,
  deletFacture,
} = require("../service/invoices");

const creatFacture = async (req, res) => {
  try {
    await creeInvoices(req, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listeAllFacture = async (req, res) => {
  try {
    await listeFacture(req, res);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const listefuctureById = async (req, res) => {
  try {
    await listefactureById(req, res);
  } catch (error) {
    res.status(500).json(error);
  }
};

const modifierFacture = async (req, res) => {
  try {
    await ubdateFacture(req, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const supprimerFacture = async (req, res) => {
  try {
    await deletFacture(req, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  creatFacture,
  listeAllFacture,
  listefuctureById,
  modifierFacture,
  supprimerFacture,
};
