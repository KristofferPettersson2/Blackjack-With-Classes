class Table{
    constructor(){
        this.deck = null;
        this._player = null;
        this._dealer = null;
        this._dealerWins = "Dealer Wins";
        this._playerWins = "Player Wins";
        this._draw = "Draw";
    }

    newGame(){

    }

    displayRemainingCards(){

    }

    drawPlayerCard = () => this._player.addCard(this._deck);
    drawDealerCard = () => this.dealer.addCard(this._deck);
    drawDealerCards = () => {

    }

    getPlayerOutput(){

    }

    getDealerOutput(){
        
    }
}
