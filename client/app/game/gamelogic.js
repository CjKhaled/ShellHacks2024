// Add Prompt from GPT as Object for Functions
// Pass in Correct Answer

const age = 16;
const start = true;
const ageIncrement = 1;
const previousPrompts = {};
const previousAnswers = [];
const correctAnswer = false;
const askScenario = false;

const categories = [
    "Budgeting", 
    "Retirement Planning", 
    "Insurance", 
    "Credit Score", 
    "Financial Scams", 
    "Tax Planning", 
    "Investing", 
    "Debt Management", 
    "Emergency Fund", 
    "Inflation"
];
  

function incrementAge(ageIncrement) {
        if(askScenario == false) {
            if(ageIncrement == 1) {
                const change = getRandomInt(2);
                if (change == 2) {
                    ageIncrement = 1;
                    askScenario = true;
                } else {
                    ageIncrement++;
                    askScenario = false;
                }
            }
            else if(ageIncrement == 2) {
                change = getRandomInt(3)
                if(change == 1 || change == 3) {
                    ageIncrement = 1;
                    askScenario = true;
                } else {
                    ageIncrement++;
                    askScenario = false;
                }
            } else {
                ageIncrement = 1;
                askScenario = true;
            }
        } 
                
    }

function getRandomInt(max) { // MDN Web Docs 
    return Math.floor(Math.random() * max);
}

function fillPrompts(prompt, category) {
    previousPrompts[prompt] = category;
}
