var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var fight = function(enemy) {
    console.log("starting fight")
};

function hideEl(elementId) {
  document.getElementById(elementId).style.display = "none";
}

function showEl(elementId) {
  document.getElementById(elementId).style.display = "block";
}

hideEl("fight-or-skip");

function fightOrSkip() {
  showEl("fight-or-skip");

  document.getElementById("fight-battle").addEventListener("click", function() {
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyObj);
  });

  document.getElementById("skip-battle").addEventListener("click", function() {
    var confirmSkip = window.confirm("Are you sure you'd like to skip? You will forfeit this round and lose 10 coins.");
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight.");
      // subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max(0, playerInfo.money -10);
      // // return true if player wants to leave
      return true;
    }
    return false;
  })
}

var startGame = function() {
    // // reset player stats
    // playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in
            document.getElementById("round-num").textContent = `Round ${i + 1}`
            // ask player to fight or skip
            fightOrSkip();
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];
            // reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            
            

            // //if player is still alive and we're not at the last enemy in the array
            // if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            //     // ask if player wants to use the store before next round
            //     var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            //     // if yes, take them to the store() function
            //     if (storeConfirm) {
            //         shop();
            //     }
            // }
        }

        // else {
        //     headPrompt.textContent = `You have lost your robot in battle! Game over!`;
        //     break;
        // }
    }
    // // after the loop ends, player is either out of health or enemies to fight, so run the endGame() function
    // endGame();
};

function displayStats() {
    document.getElementById("playerName").textContent = playerInfo.name;
    document.getElementById("playerHealth").textContent = `Health: ${playerInfo.health}`;
    document.getElementById("playerAttack").textContent = `Attack: ${playerInfo.attack}`;
    document.getElementById("playerMoney").textContent = `Money: ${playerInfo.money}`;
}

var playerInfo = {
    health: 100,
    attack: 10,
    money: 10,
    // reset: function() {
    //     this.health = 100;
    //     this.money = 10;
    //     this.attack = 10;
    // },
    // refillHealth: function() {
    //     if (this.money >= 7) {
    //         window.alert("Refilling player's health by 20 for 7 dollars.");
    //         this.health += 20;
    //         this.money -= 7;
    //     }
    //     else {
    //         window.alert("You don't have enough money!");
    //     }
    // },
    // upgradeAttack: function() {
    //     if (this.money >= 7) {
    //         window.alert("Upgrading player's attack by 6 for 7 dollars.");
    //         this.attack += 6;
    //         this.money -= 7;
    //     }
    //     else {
    //         window.alert("You don't have enough money!");
    //     }
    // }
};

document.getElementById("name-btn").addEventListener("click", function() {
    playerInfo.name = document.getElementById("name-input").value;
    hideEl("name-div");
    displayStats();
    startGame();
})

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];