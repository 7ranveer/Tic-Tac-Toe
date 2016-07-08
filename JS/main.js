$(document).ready(function() {
  var userColour;
  var aiColour;
  var movesMade = [];
  var availablePositions = ["1", "2", "3","4", "5", "6","7", "8", "9"];
  function getCell(array) {
    var firstMove = +array[0];
    switch (firstMove) {
      case 1:
        return 5;
      case 2:
        return 1;
      case 3:
        return 5;
      case 4:
        return 7;
      case 5:
        return 1;
      case 6:
        return 3;
      case 7:
        return 5;
      case 8:
        return 9;
      case 9:
        return 5;
    }
  };
function returnCellForScenario(moveOne, moveTwo) {
    var isAvailable = false;
    var smallest = Math.min(moveOne, moveTwo);
    var largest = Math.max(moveOne, moveTwo);
    var scenario = smallest.toString() + "-" + largest.toString();
    switch (scenario) {
      case "1-3":
        return 2;
      case "1-7":
        return 4;
      case "3-9":
        return 6;
      case "7-9":
        return 8;
      case "1-9":
        return 5;
      case "3-6":
        return 9;
      case "2-8":
        return 5;
      case "4-6":
        return 5;
      case "1-2":
        return 3;
      case "1-4":
        return 7;
      case "1-5":
        return 9;
      case "2-3":
        return 1;
      case "2-5":
        return 8;
      case "3-5":
        return 7;
      case "3-7":
        return 5;
      case "4-5":
        return 6;
      case "4-7":
        return 1;
      case "5-6":
        return 4;
      case "6-7": 
        return 5
      case "5-7":
        return 3;
      case "5-8":
        return 2;
      case "5-9":
        return checkIfCellAvailable(1) ? 1 : 3;
      case "6-9":
        return 3;
      case "7-8":
        return 9;
      case "8-9":
        return 7;
      case "1-8":
        return 7;
      case "2-7":
        return 1;
      case "2-9":
        return 5;
      case "3-8":
        return 9;
      case "2-4":
        return 5;
      case "2-6":
        return 5;
      case "4-8":
        return 5;
      case "6-8":
        return 5;
      case "3-4":
        return 1;
      case "4-9":
        return 1;
      case "1-6": 
        return 3;
    }
  };
  function checkScenarioAndReturnCell(array, length, subtractor) {
 var historicMove = array[length - subtractor];
 if (historicMove !== "undefined") {
   var lastMove = array[length - 1];
  var cellId = returnCellForScenario(historicMove, lastMove, subtractor);
var selectedCell = returnjQSelector(cellId);
      var isAvailable = checkIfCellAvailable(selectedCell.attr("id"));
      return isAvailable ? cellId : getRandomCell();
    }
  };
  function checkIfWon(player) {
    player = player.toLowerCase();
    if ($("#1").hasClass(player + "-active") && $("#2").hasClass(player + "-active") && $("#3").hasClass(player + "-active") || $("#4").hasClass(player + "-active") && $("#5").hasClass(player + "-active") && $("#6").hasClass(player + "-active") || $("#7").hasClass(player + "-active") && $("#8").hasClass(player + "-active") && $("#9").hasClass(player + "-active") || $("#1").hasClass(player + "-active") && $("#4").hasClass(player + "-active") && $("#7").hasClass(player + "-active") || $("#2").hasClass(player + "-active") && $("#5").hasClass(player + "-active") && $("#8").hasClass(player + "-active") || $("#3").hasClass(player + "-active") && $("#6").hasClass(player + "-active") && $("#9").hasClass(player + "-active") || $("#1").hasClass(player + "-active") && $("#5").hasClass(player + "-active") && $("#9").hasClass(player + "-active") || $("#3").hasClass(player + "-active") && $("#5").hasClass(player + "-active") && $("#7").hasClass(player + "-active")) {
      $("#result-output").append("<h2 id='win-status'>" + player.toUpperCase() + " WON!</h2>");
      availablePositions = [];
      setTimeout(reset, 1000);
      return true;
    }
    else if (availablePositions.length === 0) {
      availablePositions = [];
      $("#result-output").append("<h2 id='win-status'>IT'S&nbsp;A&nbsp;DRAW!</h2>");
      setTimeout(reset, 1000);
      return true;
    } else
      return false;
  }
  function checkWinningPositions(player) {
    player = player.toLowerCase();
    if ($("#1").hasClass(player + "-active") && $("#2").hasClass(player + "-active") && $("#3").hasClass(player + "-active") || $("#4").hasClass(player + "-active") && $("#5").hasClass(player + "-active") && $("#6").hasClass(player + "-active") || $("#7").hasClass(player + "-active") && $("#8").hasClass(player + "-active") && $("#9").hasClass(player + "-active") || $("#1").hasClass(player + "-active") && $("#4").hasClass(player + "-active") && $("#7").hasClass(player + "-active") || $("#2").hasClass(player + "-active") && $("#5").hasClass(player + "-active") && $("#8").hasClass(player + "-active") || $("#3").hasClass(player + "-active") && $("#6").hasClass(player + "-active") && $("#9").hasClass(player + "-active") || $("#1").hasClass(player + "-active") && $("#5").hasClass(player + "-active") && $("#9").hasClass(player + "-active") || $("#3").hasClass(player + "-active") && $("#5").hasClass(player + "-active") && $("#7").hasClass(player + "-active")) {
      return true;
    } else if (availablePositions.length === 0) {
      return true;
    }
    return false;
  }
   function removePosition(id) {
    var cellIndex = availablePositions.indexOf(id);
    if (cellIndex > -1)    availablePositions.splice(cellIndex,1);}
  function getRandomCell() {
    var cellId;
    if (availablePositions.length === 0)
      return cellId = 0;
    else if(availablePositions.indexOf("5") > -1){return cellId = 5;}
else {
 cellId = availablePositions[Math.floor(Math.random() * availablePositions.length)];
      var selectedCell = returnjQSelector(cellId);
      if (availablePositions.indexOf(cellId) === -1 || selectedCell.hasClass("player-active"))
        getRandomCell();
      else if (cellId % 2 === 0){
        var evensOnly = availablePositions.forEach(function(val){return val % 2 !== 0;});
if (evensOnly === undefined)
 cellId = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    else
      getRandomCell();
      }
      else if (cellId === undefined)
        getRandomCell();
      return cellId;
    }
  }
   function playerMove(selectedCell) {
    selectedCell.addClass("player-active").css("background-color", userColour);
    var cellId = selectedCell.attr("id");
    removePosition(cellId);
    movesMade.push(cellId);
  }
  function aiMove() {
    var cellId;
    var subtractor = 3;
    if (movesMade.length === 1)
      cellId = getCell(movesMade);
    else if (movesMade.length > 1) {
    var winningMoves_Computer = [];
     var winningMoves_Player = [];
for (var i = 0; i < availablePositions.length; i++) {
 var futureArray = movesMade; futureArray.push(availablePositions[i]);
var prospectiveCell=
    availablePositions[i];
   var selectedCell = returnjQSelector(prospectiveCell);
 selectedCell.addClass("player-active computer-active");
 if (checkWinningPositions("computer")) {       winningMoves_Computer.push(prospectiveCell);}
 else if (checkWinningPositions("player")){  winningMoves_Player.push(prospectiveCell);}    selectedCell.removeClass("player-active computer-active");
movesMade.splice(movesMade.length - 1, 1);}
  cellId = winningMoves_Player[0];
      if (winningMoves_Computer.length > 0)
        cellId = winningMoves_Computer[0];
      if (cellId === undefined)
     cellId = checkScenarioAndReturnCell(movesMade, movesMade.length, subtractor);}
var selectedCell = returnjQSelector(cellId);
    selectedCell.addClass("computer-active").css("background-color", aiColour);
checkIfWon("computer"); removePosition(selectedCell.attr("id"));
  movesMade.push(cellId);
  }
 var takeTurns = function(selectedCell) {
  playerMove(selectedCell);
  var hasWon =checkIfWon("player");
   if (!hasWon)
      aiMove();  };
 function checkIfCellAvailable(cellId) {
    var selectedCell = returnjQSelector(cellId);
    if ((availablePositions.indexOf(selectedCell.attr("id")) > -1) || (selectedCell.attr("class") === "player-active"))
      return true;
    else
      return false;
  }
    $("td").on("click", function() {
    var selectedCell = $(this);
    var isAvailable = checkIfCellAvailable(selectedCell.attr("id"));
    if (isAvailable)
      takeTurns(selectedCell);
  });
   $(".selector").one("click", function() {
    $(this).css("border-color", "#000000");
    var userChoice = $(this).attr("id");
    userColour = $(this).css("background-color");
    userChoice === "naught" ? aiColour = $("#cross").css("background-color") : aiColour = $("#naught").css("background-color");
    $(".selector").off();
  });
 function returnjQSelector(cellId) {
  return $("#" + cellId); }
   function reset() {
    $(".cell").removeClass("player-active computer-active").css("background-color", "");
 availablePositions = ["1", "2", "3","4", "5", "6","7", "8", "9"];
$("#result-output").empty();
    movesMade = []; } });
