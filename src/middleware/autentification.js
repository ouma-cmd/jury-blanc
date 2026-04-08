const { verifyy } = require("../util/token");

const midllwerAutentication = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    // console.log(header);

    if (!header) {
      res.send("token not find ");
    }

    const port = header.split(" ");

    const decode = verifyy(port[1]);
    // console.log(decode);

    req.user = decode;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = midllwerAutentication;
