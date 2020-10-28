class DealerHand extends Hand {
    constructor() {
        super();
    }

    get stay() { return super.stay || super.result.score > 16 || (super.result.score <= 21 && super.result.cards.length == 5); }
    set stay(value) { super._stay = value; }
}