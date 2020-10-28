class Scoreboard {
    constructor(scoreboard) {
        this._scoreboard = scoreboard;
        if (localStorage.scoreboard != undefined)
            this._scoreboard.innerHTML = localStorage.scoreboard;
    }

    addScore(player, dealer, winner){
        let color = winner == "Dealer Wins" ? "text-danger" : "text-success";
        if(winner == "Draw") color = "text-warning";
        let td = `<td>${player}</td><td>${dealer}</td><td class="${color}">${winner}</td>`;
        let scores = this._scoreboard.innerHTML;
        this._scoreboard.innerHTML = `${td}${scores}`;
        localStorage.scoreboard = this._scoreboard.innerHTML;
    }

    clearScorboard(){
        localStorage.removeItem("scoreboard");
        this._scoreboard.innerHTML = "";
    }
}