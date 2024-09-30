const express = require("express");
const router = express.Router();
const controller = require("../controllers/genAIController");
const authenticateJWT = require("../middleware/auth");

router.post('/regular-scenario', controller.sendRegularScenario)
router.post('/random-scenario', controller.sendRandomScenario)

module.exports = router