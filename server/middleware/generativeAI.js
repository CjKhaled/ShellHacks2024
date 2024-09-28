const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

async function firstQuestion(age, history, categories, money) {
  const chosenCategory = determineCategory(categories, history);
  const prompt = `
    Generate a humorous financial literacy question for a 20-year-old user with a skill level of 3 out of 5, who has $${money}. 
    The question should focus on ${chosenCategory} and provide 4 possible scenario responses. 
    Ensure that the scenarios reflect their financial situation, are challenging but appropriate for their skill level, and make the right answer not obvious. 
    Each scenario should have both good and bad outcomes, encouraging critical thinking about the consequences as well reflects to their ${skill}
    Include a brief educational takeaway for each scenario to teach the user something valuable about financial literacy.
    
    Example format:
    Question: "You're at a party and someone offers you a 'once-in-a-lifetime' investment opportunity. What do you do?"
    1. Consult your mom, who always gives sound financial advice... about getting a loan.
    2. Look up the company on Google to see if it has any bad reviews.
    3. Pretend to be interested while planning to invest in a burrito instead. `

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
async function generateRandomScenario(age, skillLevel, previousPrompts, category) {

    const prompt = ``
}
}
module.exports = { firstQuestion }