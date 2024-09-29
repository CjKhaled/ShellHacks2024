const { Configuration, OpenAIApi } = require("openai");
require('dotenv').require()

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const ageRanges = {
  "young-adult": "16-22",
  "adult": "22-30",
  "middle-aged": "30-50",
  "elderly": "50-90",
};
const financialLiteracyPrinciples = [
  "budgeting",
  "discipline",
  "insurance",
  "mortgages",
  "saving for emergencies",
  "investing",
];
const commonBasicSituations = {
  "young-adult": [
    "get a part-time job",
    "go to college",
    "go into the military",
    "buy a car",
    "buy a credit card",
    "get a boyfriend or girlfriend",
    "go to a party",
    "go to a concert",
    "have kids",
  ],
  "adult": [
    "get a full-time job",
    "move out and rent your own place",
    "pay off student loans",
    "buy a car",
    "get married",
    "investment oppotunities",
    "open a retirement savings account",
    "handle unexpected expenses",
    "buy a house",
    "start a side hustle",
    "have kids",
  ],
  "middle-aged": [
    "buy a house",
    "have kids",
    "save for college fund",
    "investment opportunities",
    "start a business",
    "move up corporate ladder",
    "get married",
    "get divorced",
  ],
  "elderly": [
    "retire",
    "travel",
    "pay off debt",
    "medical expenses",
    "sell assets",
  ],
};

const commonTradeOffs = { 
    "young-adult" : [ 
    "wanting to have fun while young",
    "saving for a future goal vs. spending on immediate experiences", 
    "affording travel versus saving for a car", 
    "investing in education vs. taking a gap year to work", 
    "prioritizing social life expenses over savings", 
    "buying trendy clothes versus building a professional wardrobe", 
    "paying for subscriptions vs. saving for emergencies", 
    "spending on dining out vs. cooking at home", 
    "going out with friends vs. saving for a bigger purchase", 
    "pursuing hobbies versus working extra hours for more income"
    ],
    "adult" : [
        "sacrificing career advancement opportunities to maintain a work-life balance for mental health", 
        "investing in a potentially profitable side hustle that could fail versus saving for a home down payment", 
        "continuing to pay for expensive health insurance versus risking high out-of-pocket costs by going uninsured", 
        "buying a new car that’s more reliable but incurs higher debt versus keeping an older car that may require costly repairs", 
        "accepting a job that offers a substantial salary increase but requires relocating to a city with a higher cost of living", 
        "supporting a friend’s startup with your savings, risking your financial stability versus potentially missing out on a rewarding experience", 
        "taking a high-stress job for financial security versus pursuing a passion project that may not pay off immediately", 
        "staying in a relationship that provides emotional support but complicates your financial situation versus breaking up for financial independence", 
        "investing in continued education for a higher earning potential versus gaining hands-on experience in your current job", 
        "committing to a retirement savings plan at the expense of current lifestyle choices that bring joy and fulfillment"
    ], 
    "middle-aged" : [
        "allocating savings toward a child's college fund versus prioritizing retirement savings for your own future", 
        "taking on a second mortgage for a rental property that could be a great investment versus paying off existing debt for financial peace", 
        "continuing to support aging parents financially while trying to save for your children's future versus drawing boundaries to protect your own financial stability", 
        "investing in a business opportunity with uncertain returns versus putting that money into a safe but low-interest savings account", 
        "delaying necessary home repairs to save for an expensive vacation versus maintaining the value of your home", 
        "changing careers for job satisfaction and passion versus staying in a secure job with benefits that you dislike", 
        "purchasing a luxury item that enhances your lifestyle but strains your budget versus saving that money for emergencies", 
        "contributing to a retirement account versus paying off student loans for your children", 
        "diverting funds from retirement savings to pay for a family member's unexpected medical expenses versus risking your own retirement security", 
        "deciding whether to stay in a stable job that pays well but is unfulfilling versus pursuing a riskier but more rewarding career path"
    ],
    "elderly" : [
        "deciding whether to downsize to a smaller home for lower maintenance costs versus staying in a larger home filled with memories", 
        "allocating retirement savings for healthcare expenses versus leaving an inheritance for children", 
        "choosing to travel and enjoy retirement versus saving money for potential long-term care needs", 
        "continuing to work part-time for extra income versus fully retiring to enjoy leisure time", 
        "paying for expensive medications versus cutting back on other essential living expenses", 
        "investing in a long-term care insurance policy versus self-funding healthcare costs out of retirement savings", 
        "giving financial support to grandchildren for education versus saving for one's own unexpected expenses", 
        "transferring assets to children to minimize estate taxes versus retaining control of assets for personal needs", 
        "deciding whether to invest in home modifications for aging in place versus moving to a retirement community with care services", 
        "sacrificing personal comfort and experiences to maintain financial stability versus indulging in experiences that may not be affordable"
    ]
};

const commonRandomScenarios = {"young-adult": ["you break an arm", "you got caught speeding", "you get a parking ticket", "you find 100 bucks on the floor"], "adult": ["you get addicted to drugs", "you develop a drinking problem", "you develop a smoking addiction"], "middle-aged": ["you develop a midlife crisis", "you get in a car crash", "you fall into a deep depression"], "elderly": ["you develop arthritis"]}

async function generateRegularScenario(age, background, category, balance) {
    const prompt = `
    Create a life scenario that incorporates a question for a user in a life simulation game like BitLife.
    The user is in the age group ${age} and currently has ${balance}.
    Consider and take advantage of their background and their balance so that a scenario is logically plausible. Their background is ${background}
    Create a situation from their age group, taking inspiration from the commonBasicSituations.
    Introduce this trade-off that fits this situation which they must consider, taking inspiration from commonTradeOffs that fits the age group.
    Incorporate this financial literacy principle ${category} into the scenario.
    Provide three choices for the player, one which increases the character's balance (even by a small amount), one that removes money but can bring other benefits, and one that is either a neutral or risky choice that could add or subtract from the balance.
    Ensure each choice is enjoyable and presents a consequence, either positive or negative, to make the game engaging.
    `;

    const response = await openai.createCompletion({
        model: "gpt-4",
        prompt: prompt,
        max_tokens: 300,
    })

    return response.data.choices[0].text.trim()
  }


module.exports = generateRegularScenario
