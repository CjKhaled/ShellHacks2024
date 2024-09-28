const { Configuration, OpenAIApi } = require('openai')

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

const ageRanges = {'young-adult': '16-22', 'adult': '22-30', 'middle-aged': '30-50', 'elderly': '50-90'}
const financialLiteracyPrinciples = ['budgeting', 'discipline', 'insurance', 'mortgages', 'saving for emergencies', 'investing']
const commonBasicSituations = {
    'young-adult': ['get a part-time job', 'go to college', 'go into the military', 'buy a car', 'buy a credit card', 'get a boyfriend or girlfriend', 'go to a party', 'go to a concert', 'have kids'],
    'adult': ['get a full-time job', 'move out and rent your own place', 'pay off student loans', 'buy a car', 'get married', 'investment oppotunities', 'open a retirement savings account', 'handle unexpected expenses', 'buy a house', 'start a side hustle', 'have kids'],
    'middle-aged': ['buy a house', 'have kids', 'save for college fund', 'investment opportunities', 'start a business', 'move up corporate ladder', 'get married', 'get divorced'],
    'elderly': ['retire', 'travel', 'pay off debt', 'medical expenses', 'sell assets']
}
const commonTradeOffs = ["losing time with loved ones", ""]

async function generateRandomScenario(age, skillLevel, previousPrompts, category) {

    const prompt = ``
}

async function generateQuestion() {

}

module.exports = {
    generateRandomScenario,
    generateQuestion
}