const express = require("express");
const { register, login } = require("../service/autentification");

const registController = async (req, res) => {
  try {
    const regist = await register(req, res);

    res.json(regist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    await login(req, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registController,
  loginController,
};
