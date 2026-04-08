const virefy = require("../util/joi");

const registermiddlUser = async (req, res, next) => {
  const { name, email, password, role  } = req.body;

  const { err } = virefy.validate({ name, email, password, role });

  if (err) {
    return res.status(422).json(err);
  }

  next();
};

module.exports = registermiddlUser;
