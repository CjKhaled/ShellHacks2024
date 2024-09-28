const { Configuration, OpenAIApi } = require('openai')

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

const ageRanges = {'young-adult': '16-22', 'adult': '22-30', 'middle-aged': '30-50', 'elderly': '50-90'}
const commonBasicSituations = {
    'young-adult': ['get a part-time job, go to college, go into the military, buy a car, buy a credit card, get a boyfriend or girlfriend, going to a party, going to a concert'],
    'adult': []
}

async function generateRandomScenario(age, skillLevel, previousPrompts, category) {

    const prompt = ``
}

async function generateQuestion() {

}

module.exports = {
    generateRandomScenario,
    generateQuestion
}