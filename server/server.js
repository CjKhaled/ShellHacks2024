require('dotenv').config();  
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Users object to store user data (replace with DB later)
const users = {
  'user1': { age: 18, skillLevel: 3, financialStatus: 'Stable', categories: { savings: 0, debt: 1, investment: 0, budgeting: 0 } },
  'user2': { age: 25, skillLevel: 4, financialStatus: 'Improving', categories: { savings: 1, debt: 0, investment: 0, budgeting: 1 } },
};


const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));


const { generateQuestion } = require('./ai_model');


app.post('/getQuestion', async (req, res) => {
  const { userId } = req.body;

  if (!users[userId]) {
    return res.status(404).json({ error: "User not found" });
  }

  const user = users[userId];
  const question = await generateQuestion(user);

  
  res.json({ question });
});


app.post('/updateSkill', (req, res) => {
  const { userId, scenarioId } = req.body;

  if (!users[userId]) {
    return res.status(404).json({ error: "User not found" });
  }

  const user = users[userId];


//   if (scenarioId === 1) {
//     user.skillLevel += 10;  
//     user.financialStatus = "Improving";
//   } else if (scenarioId === 2) {
//     user.skillLevel -= 5;  
//     user.financialStatus = "Struggling";
//   }

  res.json({ skillLevel: user.skillLevel, financialStatus: user.financialStatus });
});
