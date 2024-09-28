const { Configuration, OpenAIApi } = require('openai')

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

async function generateRandomScenario(age, skillLevel, previousPrompts, category) {
    const prompt = ``
}

async function generateQuestion() {

}

module.exports = {
    generateRandomScenario,
    generateQuestion
}