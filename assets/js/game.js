/* // this creates a function named fight

window.alert("This is an alert! JavaScript is running!");

// this creates a function named "fight"

function fight() {
  window.alert("The fight has begun!");
}

// fight();

var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName
console.log(playerName);

console.log("THis logs a string and is good for leaving a message");

console.log(10 + 10);

console.log("Our robots name is " + playerName);
*/


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log mutiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  // Alert players they are statrting a round
  window.alert("welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.")
  console.log(promptFight);

  // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // Confirm the player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");

  // If yes (true), leave fight
  if  (confirmSkip) {
    window.alert(playerName + " has decided to run from this fight. Goodbye until next battle!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    console.log("You have " + playerMoney + " dollars.");
  }

    // If no (false), ask question again by running fight() again
    else {
      fight();
    }


  window.alert(playerName + " has chosen to skip the fight!");
} else {
  window.alert("You need to choose a valid option. Try again!");
}


    // If player chooses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

  // Check enemy's health 
  if (enemyHealth <=0) {
    window.alert(enemyName + " had died!");
  } else {
    window.alert(enemyName + " stil has " + enemyHealth + " health left.");
  }
}


// Subract the value of playerAttack from the value of enemyHealth and use that restult to update the value in the enemyHealth variable
enemyHealth = enemyHealth - playerAttack;

// Log a reulting message to the console so we know that it worked. 
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " how has " + enemyHealth + " health remaining."
);

// check enemy's heath
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
}
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// Subtract the value of enemyAttck from the value of playerHealth and use the restult to update the value in the playerHealth variable
playerHealth = playerHealth - enemyAttack;


// log a resulting message to the console so we know that it worked
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

  // Check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
}
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}


};

fight();
