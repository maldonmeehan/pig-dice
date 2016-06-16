// backend logic
function Player(isCurrentPlayer) {
  this.totalScore = 0;
  this.turnScore = 0;
  this.rollScore = [];
  this.activePlayer = true;
}

function randomDieRoller() {
  var randomDieRoll = Math.floor((Math.random() * 6) +1);
  return randomDieRoll;
}

Player.prototype.turnScoreGenerator = function(dieRoll) {
  if (dieRoll === 1) {
    // var totalScore
    this.turnScore = 0;
    this.switch();
  } else {
    this.turnScore += dieRoll;
  }
  return this.turnScore;
}

Player.prototype.totalScoreGenerator = function(turnScore) {
  this.totalScore = this.totalScore + this.turnScore;
  return this.totalScore;
}

Player.prototype.activePlayer = function (activePlayer){
  if (dieRoll === 1)
  this.switch();
  else {
    this.totalScore += this.turnScore;
  }
}

Player.prototype.switch = function()  {
  if (this === player1) {
    player1.activePlayer = false;
    player2.activePlayer = true;
  } else if (this === player2) {
    player2.activePlayer = false;
    player1.activePlayer = true;
  }
}

// switch players with true false (1 or hold)
// if total score is 100, than game win

// Frontend logic
$(document).ready(function() {
  var player1 = new Player(0, 0, 0, true);
  var player2 = new Player(0, 0, 0, false);

  $("#roll").click(function(event){
    event.preventDefault();
    var dieRoll = randomDieRoller();
    $("#die1").text(dieRoll);

    var turnScore = player1.turnScoreGenerator(dieRoll);
    $("#player1turn").text(player1.turnScore);
    // $("h4#player1").append("<h4>" + "Player 1: " + totalScore + "</h4>");

    var turnScore = player1.totalScoreGenerator(dieRoll);
    $("#player1").text(player1.totalScore);

    var turnScore = player2.totalScoreGenerator(dieRoll);
    $("#player2turn").text(player2.totalScore);

    var turnScore = player2.turnScoreGenerator(dieRoll);
    $("#player2").text(player2.turnScore);
    // $("h4#player2").append("<h4>" + "Player 2: " + totalScore + "</h4>");
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
