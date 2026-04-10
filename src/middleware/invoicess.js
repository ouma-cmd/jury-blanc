const Invoicessvalider = require("../util/joiInvoicess");

const invaliderInvoicess = async (req, res, next) => {
  const { name, amount, status, description, dueDate, fournisseurId } =
    req.body;

  const { err } = Invoicessvalider.validate({
    name,
    amount,
    status,
    description,
    dueDate,
    fournisseurId,
  });

  if (err) {
    return res.status(400).json({ err });
  }
  next();
};

module.exports = invaliderInvoicess;
