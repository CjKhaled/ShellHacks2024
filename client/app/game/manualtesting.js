console.log("Test");
const { checkCategory, fillPrompts, previousPrompts} = require('./gamelogic.js'); // Replace with your actual module file name
// Manually test the `checkCategory` function
function testCheckCategory() {
    const history = ["budgeting", "retirement planning", "insurance", "credit score", "financial scams"];
    const result = checkCategory(history);
    console.log("Test 1 - Selected Category (should not be in the history):", result);
}

// Manually test the `fillPrompts` function
function testFillPrompts() {
    fillPrompts("Sample Prompt 2", "budgeting");
    fillPrompts("Sample Prompt 2", "budgeting");
    fillPrompts("Sample 1", "insurance")
    fillPrompts("Sample 3", "retirement planning")
    console.log("Test 2 - Previous Prompts:", previousPrompts); // Ensure previousPrompts is accessible here
}

// Run all tests
function runTests() {
    console.log("Running manual tests...");
    testCheckCategory();
    testFillPrompts();
}

runTests();
