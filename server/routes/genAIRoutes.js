const express = require("express");
const router = express.Router();
const controller = require("../controllers/genAIController");
const authenticateJWT = require("../middleware/auth");

router.post('/regular-scenario', authenticateJWT, controller.sendRegularScenario)
router.post('/random-scenario', authenticateJWT, controller.sendRandomScenario)

module.exports = router