const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,  
});
const openai = new OpenAIApi(config);


function determineCategory(categories) {
  
  const availableCategories = Object.keys(categories);
  return availableCategories[Math.floor(Math.random() * availableCategories.length)];
}

async function generateQuestion(user) {
  const prompt = `
    Create a random financial literacy question for a user who is ${user.age} years old and has a skill level of ${user.skillLevel} out of 5.
    The question should be focused on ${determineCategory(user.categories)} and should provide 4 possible scenario responses for the user to choose from.
    One of the responses should be the best financial choice that will increase their skill level.
    Make sure the question is appropriate for the age.
  `;

  const response = await openai.createCompletion({
    model: "gpt-4",
    prompt: prompt,
    max_tokens: 300,
  });

  
  return response.data.choices[0].text;
}

module.exports = { generateQuestion };


