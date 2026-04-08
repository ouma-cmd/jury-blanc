const express = require("express");
const { register, login, getUser } = require("../service/autentification");

const registController = async (req, res) => {
  try {
    await register(req, res);

    
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

const userme = async (req,res)=>{
    try {
        
        const user = await getUser(req,res);
        res.json(user);

    } catch (error) {

        res.status(200).json({message : error.message})
    }

}

module.exports = {
  registController,
  loginController,
  userme,
};
