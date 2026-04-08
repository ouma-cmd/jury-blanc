const { verify, sign } = require("jsonwebtoken");

require("dotenv").config();

const signn = (payload) => {
  return sign(payload, process.env.SECRET_KEY_ACCESS_TOKEN, {
    expiresIn: "1d",
  });
};

const verifyy = (token) => {
  return verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);
};

module.exports = {
  signn,
  verifyy,
};
