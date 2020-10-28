const startBtn = document.getElementById("start-btn");
const drawBtn = document.getElementById("draw-btn");
const stayBtn = document.getElementById("stay-btn");
const clearBtn = document.getElementById("clear-btn");
const playerHand = document.getElementById("player-hand");
const dealerHand = document.getElementById("dealer-hand");
const winnerArea = document.getElementById("winner-area");
const scoreBoard = document.getElementById("scoreboard");

const table = new Table();

let scoreboard = new Scoreboard(scoreBoard);

let clearTable = () => {
    playerHand.innerHTML = "";
    dealerHand.innerHTML = "";
    winnerArea.innerHTML = "";
}

let disableButtons = (start = false, draw = true, stay = true) => {
    if (start) startBtn.setAttribute("disabled", "disabled");
    else startBtn.removeAttribute("disabled");

    if (draw) drawBtn.setAttribute("disabled", "disabled");
    else drawBtn.removeAttribute("disabled");

    if (stay) stayBtn.setAttribute("disabled", "disabled");
    else stayBtn.removeAttribute("disabled");
}

let displayOutput = (htmlContainer, output) => htmlContainer.innerHTML = output;

let displayWinner = (playerStayed = false) => {
    let winner = table.findWinner(playerStayed);
    displayOutput(winnerArea, winner);

    if(winner.length > 0){
        disableButtons();
        scoreboard.addScore(table.getPlayerOutput(), table.getDealerOutput(), winner)
    }

    return winner;
}

startBtn.onclick = () => {
    console.log("Start button clicked");
    clearTable();
    disableButtons(true, false, false);
    table.newGame();
    displayOutput(playerHand, table.getPlayerOutput());
    displayOutput(dealerHand, table.getDealerOutput());
    displayWinner();
};

drawBtn.onclick = () =>{
    console.log("Draw button Clicked");
    table.drawPlayerCard();
    displayOutput(playerHand, table.getPlayerOutput());
    displayWinner();
}

stayBtn.onclick = () =>{
    console.log("Stay button clicked");
    disableButtons();
    table.drawDealerCards();
    displayOutput(dealerHand, table.getDealerOutput());
    displayWinner(true);
}

clearBtn.onclick = () =>{
    console.log("Clear button clicked");
    scoreboard.clearScorboard();
}