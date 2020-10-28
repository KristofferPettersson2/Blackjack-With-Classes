class Table {
    constructor() {
        this._deck = null;
        this._player = null;
        this._dealer = null;
        this._dealerWins = "Dealer Wins";
        this._playerWins = "Player Wins";
        this._draw = "Draw";
    }

    newGame() {
        console.log("New game function");
        this._deck = new Deck();
        this._player = new Hand();
        this._dealer = new DealerHand;

        this._deck.newDeck();
        this._deck.shuffleCards()

        this.drawPlayerCard();
        this.drawPlayerCard();
        this.drawDealerCard();
        this.drawDealerCard();
    }

    displayRemainingCards() {

    }

    drawPlayerCard = () => this._player.addCard(this._deck);
    drawDealerCard = () => this._dealer.addCard(this._deck);
    drawDealerCards = () => {
        while (!this._dealer.stay) {
            this._dealer.addCard(this._deck);
        }
    }

    getPlayerOutput() {
        let output = "";
        this._player.result.cards.forEach(card => {
            output += card.symbol;
        });

        output += ' ' + this._player.result.score;
        return output;
    }

    getDealerOutput() {
        let output = "";
        this._dealer.result.cards.forEach(card => {
            output += card.symbol;
        });

        output += ' ' + this._dealer.result.score;
        return output;
    }

    findWinner(playerStayed = false) {
        let pr = this._player.result;
        let dr = this._dealer.result;

        if(playerStayed) pr.stay = playerStayed;
        if(pr.isBust) return this._dealerWins;
        if(dr.isBust) return this._playerWins;
        if(pr.isBlackjack) return this._playerWins;
        if(dr.isBlackjack) return this._dealerWins;
        if(pr.stay && dr.score > pr.score) return this._dealerWins;
        if(pr.stay && pr.score > dr.score) return this._playerWins;
        if(pr.stay && pr.score == dr.score) return this._draw;

        return "";
    }   
}
