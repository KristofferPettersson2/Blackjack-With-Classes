class Result {
    constructor() {
        this._score = 0;
        this._cards = [];
        this._hasAce = false;
        this._cardAdded = false;
    }

    get cards() { return this._cards; }
    get score() { return this._score; }
    get isBust() { return this._score > 21; }
    get isBlackjack() { return this._cards.length === 2 && this._score === 21; }
    get hasAce() { return this._hasAce; }

    get cardAdded() { return this._cardAdded };
    set cardAdded(value) { return this._cardAdded = value; }

    calculateScore(cards) {
        this._cards = cards;
        this._score = 0;

        this.cards.forEach(card => {
            this._score += card.value;
            if (card.isAce) this._hasAce = true;
        });

        if (this.hasAce && this.score + 10 <= 21) //this_?
            this._score += 10;
    }
}