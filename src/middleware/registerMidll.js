const joi = require("../util/joi");

const registermiddlUser = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  console.log(password);
  console.log(req.body);

  const { err } = joi.validate({ name, email, password, role });

  if (err) {
    return res.send(err);
  }

  next();
};

module.exports = registermiddlUser;
