
function showDeathScene(accountBalance) {
    
    const deathScene = document.getElementById("deathScene");
    deathScene.style.display = "flex";

   
    const balanceElement = document.getElementById("finalBalance");
    balanceElement.innerHTML = `Final Bank Balance: $${accountBalance.toFixed(2)}`;
}


function hideDeathScene() {
    const deathScene = document.getElementById("deathScene");
    deathScene.style.display = "none";
}


showDeathScene(10000);  

module.exports = { showDeathScene, hideDeathScene };
