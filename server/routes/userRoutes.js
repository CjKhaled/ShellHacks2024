const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const authenticateJWT = require("../middleware/auth");

router.get("/user", authenticateJWT)


module.exports = router