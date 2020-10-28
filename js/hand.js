class Hand {
    constructor() {
        this._cards = [];
        this._stay = false;
        this._result = new Result;
    }

    get stay() { return this._stay || this._result.isBust || this._result.isBlackjack; }
    set stay(value) { return this._stay = value; }

    get result() { return this._result; }

    addCard(deck) {
        this._result.cardAdded = false;
        if (!this._result.stay) {
            let card = deck.drawCard();
            this._cards.push(card);
            this._result.calculateScore(this._cards);
            this.result.cardAdded = true;
        }
    }
}