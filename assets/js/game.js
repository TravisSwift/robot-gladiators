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

// You can also log mutiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var EnemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  // Alert players they are statrting a round
  window.alert("welcome to Robot Gladiators!");

// Subract the value of playerAttack from the value of enemyHealth and use that restult to update the value in the enemyHealth variable
EnemyHealth = EnemyHealth - playerAttack;

// Log a reulting message to the console so we know that it worked. 
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " how has " + EnemyHealth + " health remaining."
);

// check enemy's heath
if (EnemyHealth <= 0) {
  window.alert(enemyName + " has died!");
}
else {
  window.alert(enemyName + " still has " + EnemyHealth + " health left.");
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