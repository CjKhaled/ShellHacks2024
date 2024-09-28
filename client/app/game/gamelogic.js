// Add Prompt from GPT as Object for Functions
// Pass in Correct Answer

const age = 15;
const start = true;
const ageIncrement = 1;
const previousPrompts = {};
const previousAnswers = [];
const correctAnswer = false;
const askScenario = false;
const categoryUsage = {}; // we gonna track categories with this


categories.forEach(cat => {
    categoryUsage[cat] = 0;

const categories = [
    "budgeting", 
    "retirement planning", 
    "insurance", 
    "credit score", 
    "financial scams", 
    "tax planning", 
    "investing", 
    "debt management", 
    "emergency fund", 
    "inflation"
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

// This function determines the category for the next question by:
// 1. Creating a set of the last five used categories from the user's history
// 2. Filtering the main categories to exclude those already used recently
// This approach helps avoid repetitive categories and then i also implemented daniels frequency logic as well
function checkCategory(history) {
    const usedCategories = new Set(history.slice(-5));
    const filteredCategories = categories.filter(cat => !usedCategories.has(cat));
      // Select category based on usage frequency based on daniels logic.
    if (filteredCategories.length === 0) {
        return categories[getRandomInt(categories.length)];
    }
function fillPrompts(prompt, category) {
    previousPrompts[prompt] = category;
}
module.exports = { determinateCategory, fillPrompts
