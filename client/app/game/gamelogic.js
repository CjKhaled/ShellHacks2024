// Add Prompt from GPT as Object for Functions
// Pass in Correct Answer
const age = 16;
let percentDeath = 0;
const start = true;
let ageIncrement = 1; // Set as let for reassignment
let askScenario = false;
const accountBalance = 0;
const previousPrompts = {};
const previousAnswers = [];
const correctAnswer = false;
const categoryUsage = {}; // We are going to track categories with this

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

categories.forEach(cat => {
    categoryUsage[cat] = 0;
});

function incrementAge(ageIncrement) { // Sends a scenario based on age increment, every 3 years guaranteed scenario
    if (askScenario == false) {
        if (ageIncrement == 1) {
            const change = getRandomInt(2);
            if (change == 1) { // Corrected from change == 2
                console.log("Check made it 50%");
                ageIncrement = 1;
                askScenario = true;
            } else {
                ageIncrement++;
                askScenario = false;
            }
        } else if (ageIncrement == 2) {
            const change = getRandomInt(3);
            if (change == 1 || change == 2) { // Corrected from change == 1 || change == 3
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
// This approach helps avoid repetitive categories and implements usage frequency logic as well
function checkCategory(history) {
    const usedCategories = new Set(history.slice(-5));
    const filteredCategories = categories.filter(cat => !usedCategories.has(cat));
    // Select category based on usage frequency logic
    if (filteredCategories.length === 0) {
        return categories[getRandomInt(categories.length)];
    } else {
        return filteredCategories[getRandomInt(filteredCategories.length)];
    }
}

// Fill previous prompts with category information
function fillPrompts(prompt, category) {
    previousPrompts[prompt] = category;
}

function randomAccountBalance() {
    return getRandomInt(10000);
}

function deathChance() {
    if (age >= 60) {
        percentDeath += 0.05; 
    }
    const deathRoll = Math.random();  
    if (deathRoll < percentDeath) {
        console.log("Character has died.");
        return true;  
    } else {
        console.log("Character survives.");
        return false;
    }
}

async function getScenario(iage, ibackground, ibalance) {
    const response = await fetch("https://shellhacks2024-production.up.railway.app/regular-scenario", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        age: iage,
        background: ibackground,
        balance: ibalance
      })
    });
  
    // Await the JSON parsing
    const data = await response.json();
    
    // Log the data
    console.log(data);
    
    // Return the parsed data
    return data;
  }
  

module.exports = { checkCategory, fillPrompts, previousPrompts, incrementAge, randomAccountBalance, deathChance, getScenario}; 