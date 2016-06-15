// backend logic
function Player(isCurrentPlayer) {
  this.totalScore = 0;
  this.turnScore = 0;
  this.rollScore = 0;
  this.activePlayer = isCurrentPlayer;
}

function randomDieRoller() {
  var randomDieRoll = Math.floor((Math.random() * 6) +1);
  return randomDieRoll;
}

Player.prototype.turnScoreGenerator = function(dieRoll) {
  this.turnScore+= this.dieRoll;
  var turnScore;
  if (this.dieRoll === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore += this.dieRoll;
  }
  return this.turnScore;
}

Player.prototype.totalScoreGenerator = function(turnScore) {
  totalScore = totalScore + turnScore;
  return totalScore;
}

// switch players with true false (1 or hold)
// if total score is 100, than game win

// Frontend logic
$(document).ready(function() {
  var player1 = new Player(true);

  $("#roll").click(function(event){
    event.preventDefault();
    debugger;
    var dieRoll = randomDieRoller()
    $("#die1").text(dieRoll);

    var turnScore = totalScoreGenerator(dieRoll);
    $("#player1").text(turnScore);
    $("h4#player1").append("<h4>" + "Player 1: " + totalScore + "</h4>");
  })

  $("#hold").click(function(event){
    event.preventDefault();

    var totalScore = totalScoreGenerator(turnScore);
    $("#player1").text(totalScore);
  })
});

// status.innerHTML = "You rolled "+diceTotal+".";
// status.innerHTML += " You rolled a 1, you lose your points this round and your turn!";
