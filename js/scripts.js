// backend logic
var player1Array = [];
var player2Array = [];

function rollDice() {
  var die1 = document.getElementbyId("die1");
  var die2 = document.getElementbyId("die2");
  var status = document.getElementbyId("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
    return diceTotal;
    if(d1 === 1 || d2 === 1){
      // switch players
    };
// randomizer
// If player rolls a 2-6
// If player rolls a 1
// Add current roll score

// Frontend logic

$("button#roll").click(function()
  
});

$("button#hold").click(function()

});

// status.innerHTML = "You rolled "+diceTotal+".";
// status.innerHTML += " You rolled a 1, you lose your points this round and your turn!";
// };
