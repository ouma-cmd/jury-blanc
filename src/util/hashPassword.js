const bcrypt = require("bcryptjs");

const hash = async (password)=>{

    return await bcrypt.hash(password ,10);
}

module.exports = hash