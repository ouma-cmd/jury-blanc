const token = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const midllwerAutentication = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    console.log(header);

    if (!header) {
      res.send("token not find ");
    }

    const port = header.split(" ");

    const decode = jwt.verify(port[1], process.env.SECRET_KEY_ACCESS_TOKEN);
    // console.log(decode);

    req.user = decode;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = midllwerAutentication;
