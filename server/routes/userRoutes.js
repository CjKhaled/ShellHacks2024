const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const authenticateJWT = require("../middleware/auth");




module.exports = router