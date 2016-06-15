// backend logic
function Player(isCurrentPlayer) {
  this.totalScore = 0;
  this.turnScore = 0;
  this.rollScore = [];
  this.activePlayer = isCurrentPlayer;
}

function randomDieRoller() {
  var randomDieRoll = Math.floor((Math.random() * 6) +1);
  return randomDieRoll;
}

Player.prototype.turnScoreGenerator = function(dieRoll) {
  if (dieRoll === 1) {
    // var totalScore
    this.turnScore = 0;
  } else {
    this.turnScore += dieRoll;
  }
  return this.turnScore;
}

Player.prototype.totalScoreGenerator = function(turnScore) {
  this.totalScore = this.totalScore + this.turnScore;
  return this.totalScore;
}

// switch players with true false (1 or hold)
// if total score is 100, than game win

// Frontend logic
$(document).ready(function() {
  var player1 = new Player(true);
  var player2 = new Player(false);

  $("#roll").click(function(event){
    event.preventDefault();
    var dieRoll = randomDieRoller();
    $("#die1").text(dieRoll);

    var turnScore = player1.turnScoreGenerator(dieRoll);
    $("#player1").text(player1.turnScore);
    $("h4#player1").append("<h4>" + "Player 1: " + totalScore + "</h4>");

    var turnScore = player2.totalScoreGenerator(dieRoll);
    $("#player2").text(turnScore);
    $("h4#player2").append("<h4>" + "Player 2: " + totalScore + "</h4>");
  })

  $("#hold").click(function(event){
    event.preventDefault();

    var totalScore = player1.totalScoreGenerator(turnScore);
    $("#player1").text(totalScore);

    var totalScore = player2.totalScoreGenerator(turnScore);
    $("#player2").text(totalScore);
  })
});

// status.innerHTML = "You rolled "+diceTotal+".";
// status.innerHTML += " You rolled a 1, you lose your points this round and your turn!";
