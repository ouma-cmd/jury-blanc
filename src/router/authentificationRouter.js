const express = require("express");

const registermiddlUser = require("../middleware/registerMidll");
const { registController, loginController } = require("../controller/autentificationController");
const loginMiddl = require("../middleware/loginMidll");
const { getUser } = require("../service/autentification");
const midllwerAutentication = require("../middleware/autentification");

const router = express.Router();

router.post("/register", registermiddlUser , registController );
router.post("/login", loginMiddl , loginController);
router.get("/me",midllwerAutentication, getUser)


module.exports = router;