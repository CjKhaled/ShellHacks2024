const genAI = require("../middleware/generativeAI")

function parseScenario(jsonString) {
  // Remove the "```json" and the trailing "```" if they exist
  const cleanedString = jsonString.replace(/```json|```/g, "").trim();

  // Parse the cleaned JSON string into an object
  const scenarioObject = JSON.parse(cleanedString);

  return scenarioObject;
}

async function sendRegularScenario(req, res) {
    try {
        const { age, background, balance } = req.body
        const payload = await genAI.generateRegularScenario(age, background, balance)
        const formattedPayload = parseScenario(payload)
        res.json({success: true, payload: formattedPayload})
    } catch (error) {
        throw error
    }
}

async function sendRandomScenario(req, res) {
    try {
      const { age, background, balance } = req.body;
      const payload = await genAI.generateRandomScenario(
        age,
        background,
        balance
      );
      res.json({ success: true, payload: payload });
    } catch (error) {
      throw error;
    }
} 

module.exports = {
    sendRegularScenario,
    sendRandomScenario
}