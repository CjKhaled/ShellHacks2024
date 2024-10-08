// const { showDeathScene } = require('./deathscene.js');  // Importing showDeathScene

const age = 16;
let percentDeath = 0;
const start = true;
let ageIncrement = 1; // Set as let for reassignment
let askScenario = false;
let accountBalance = randomAccountBalance(); // Assigning a random balance on start
const previousPrompts = {};
const previousAnswers = [];
let correctAnswer = false;
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

function incrementAge() { 
    if (!askScenario) {
        if (ageIncrement === 1) {
            const change = getRandomInt(2);
            if (change === 1) { 
                ageIncrement = 1;
                askScenario = true;
            } else {
                ageIncrement++;
                askScenario = false;
            }
        } else if (ageIncrement === 2) {
            const change = getRandomInt(3);
            if (change === 1 || change === 2) { 
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

function getRandomInt(max) { 
    return Math.floor(Math.random() * max);
}

function checkCategory(history) {
    const usedCategories = new Set(history.slice(-5));
    const filteredCategories = categories.filter(cat => !usedCategories.has(cat));
    
    if (filteredCategories.length === 0) {
        return categories[getRandomInt(categories.length)];
    } else {
        return filteredCategories[getRandomInt(filteredCategories.length)];
    }
}

function fillPrompts(prompt, category) {
    previousPrompts[prompt] = category;
}

function randomAccountBalance() {
    return getRandomInt(10000);
}

function deathChance() {
    if (age >= 60) {
        percentDeath += 0.05;  // Increase death chance as the user ages past 60
    }
    const deathRoll = Math.random();  
    if (deathRoll < percentDeath) {
        console.log("Character has died.");
        return true;  // Death happened
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