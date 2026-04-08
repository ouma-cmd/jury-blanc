const express = require("express");


const User = require("../model/User");
const hash = require("../util/hashPassword");
const { verifyy , signn} = require("../util/token");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const useremail = await User.findOne({ email });

  if (useremail) {
   return  res.status(422).json("email deja execets");
  }

  const pass = await hash(password, 10);
  //   console.log(pass);

  const userCree = await User.create({
    name,
    email,
    password: pass,
    role,
  });
  res.json(userCree);
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.send("email not find ");
    }

    const passwordd = await bcrypt.compare(password, user.password);
    if (!passwordd) {
      return res.send("password is not correct");
    }

    // const token = sign(
    //   { id: user._id, role: user.role },
    //   process.env.SECRET_KEY_ACCESS_TOKEN,

    //   {
    //     expiresIn: "1d",
    //   },
    // );

    const token = signn({ id: user._id, role: user.role });

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "service error", massage: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.user;

  const userMe = await User.find({ _id: id });

//   console.log(userMe);

  res.status(200).json({ userMe });
};

module.exports = {
  register,
  login,
  getUser,
};
