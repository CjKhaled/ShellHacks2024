const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

async function firstQuestion(skill, history, categories, money) {
  const chosenCategory = determineCategory(categories, history);
  const prompt = `
    Generate a humorous financial literacy question for a 20-year-old user with a skill level of 3 out of 5, who has $${money}. 
    The question should focus on ${chosenCategory} and provide 4 possible scenario responses. 
    Ensure that the scenarios reflect their financial situation, are challenging but appropriate for their skill level, and make the right answer not obvious. 
    Each scenario should have both good and bad outcomes, encouraging critical thinking about the consequences as well reflects to their ${skill}
    Include a brief educational takeaway for each scenario to teach the user something valuable about financial literacy.
    
    Example format:
    Question: "You're at a party and someone offers you a 'once-in-a-lifetime' investment opportunity. What do you do?"
    1. Invest everything you have because YOLO!
    2. Consult your mom, who always gives sound financial advice... about getting a loan.
    3. Look up the company on Google to see if it has any bad reviews.
    4. Pretend to be interested while planning to invest in a burrito instead. `

const ageRanges = {'young-adult': '16-22', 'adult': '22-30', 'middle-aged': '30-50', 'elderly': '50-90'}
const financialLiteracyPrinciples = ['budgeting', 'discipline', 'insurance', 'mortgages', 'saving for emergencies', 'investing']
const commonBasicSituations = {
    'young-adult': ['get a part-time job', 'go to college', 'go into the military', 'buy a car', 'buy a credit card', 'get a boyfriend or girlfriend', 'go to a party', 'go to a concert', 'have kids'],
    'adult': ['get a full-time job', 'move out and rent your own place', 'pay off student loans', 'buy a car', 'get married', 'investment oppotunities', 'open a retirement savings account', 'handle unexpected expenses', 'buy a house', 'start a side hustle', 'have kids'],
    'middle-aged': ['buy a house', 'have kids', 'save for college fund', 'investment opportunities', 'start a business', 'move up corporate ladder', 'get married', 'get divorced'],
    'elderly': ['retire', 'travel', 'pay off debt', 'medical expenses', 'sell assets']
}
const commonTradeOffs = {'young-adult': 'wanting to have fun while young'}
const commonRandomScenarios = {'young-adult': ''}

async function generateRandomScenario(age, skillLevel, previousPrompts, category) {

    const prompt = `I am coding a generative AI for my fullstack web application (kinda like bitlife) to help all ages improve their financial literacy, with a fun twist on questions that depend on age, skill level, previous decisions. Try to tie the questions to the users balance, to make things difficult for them at varying money. Your goal is to generate prompts for our AI to acheive these goals. These are the parameters I have so far, what improvements would you make.`
}
}
module.exports = { firstQuestion }