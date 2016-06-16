// backend logic
var player1 = new Player(0, 0, 0, true);
var player2 = new Player(0, 0, 0, false);

function Player(totalScore, roundScore, rollScore, activePlayer) {
  this.totalScore = totalScore; //total amt of points over rounds
  this.roundScore = roundScore;  //score per turn b4 switching
  this.rollScore = rollScore; //current value of die
  this.activePlayer = activePlayer;
}

Player.prototype.randomDieRoller = function() { //makes random number.
  this.rollScore = Math.floor((Math.random() * 6) +1);
}

Player.prototype.roundScoreGenerator = function() {
  if (this.rollScore === 1) {
    this.roundScore = 0;
  } else {
    this.roundScore += this.rollScore;
  }
}

Player.prototype.totalScoreGenerator = function() {
  this.totalScore += this.roundScore;
  // this.turnScore = 0;
  // this.totalScoreArray.push(this.roundScore);
  // for (var i = 0; i < totalScoreArray.length; i ++){
  //   this.totalScoreArray = roundScore + totalScoreArray[i];
}

//switch
Player.prototype.activePlayer = function() {
  if (player1.activePlayer === true) {
    player1.activePlayer = false;
    player2.activePlayer = true;
  } else {
    player1.activePlayer = true;
    player2.activePlayer = false;
  }
}

Player.prototype.playerSwitch = function() {
  if (this.activePlayer === true) {//may have to revisit?
    this.activePlayer = false;
  } else {
    this.activePlayer == true;
  }
}
// if total score is 100, than game win

// Frontend logic
$(document).ready(function() {

  $("#roll").click(function(event) {
    event.preventDefault();

    if (player1.activePlayer === true) {
      player1.randomDieRoller();
      player1.roundScoreGenerator(player1.rollScore);
      $("#die1").text(player1.rollScore);
      $("#player1round").text(player1.roundScore);

    } else if (player1.activePlayer === false)  {
      player2.randomDieRoller();
      player2.roundScoreGenerator(player2.rollScore);
      $("die1").text(player2.rollScore);
      $("#player2round").text(player2.roundScore);
    }
  });

  $("#hold").click(function(event) {
    event.preventDefault();

    if (player1.activePlayer === true) {
      player1.totalScoreGenerator();
      $("#player1total").text(player1.totalScore);
      $("#die1").text(player1.rollScore);
      player1.playerSwitch();


    } else if (player2.activePlayer === false) {
      player2.totalScoreGenerator();
      $("#player2total").text(player2.totalScore);
      $("#die1").text(player2.rollScore);
      player2.playerSwitch();
    }
    });
  });
    // var totalScore = player1.totalScoreGenerator(roundScore);
    // $("#player1").text(totalScore);
    //
    // var totalScore = player2.totalScoreGenerator(roundScore);
    // $("#player2").text(totalScore);


// status.innerHTML = "You rolled "+diceTotal+".";
// status.innerHTML += " You rolled a 1, you lose your points this round and your turn!";
