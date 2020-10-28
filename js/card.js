class Card {
  constructor(value, symbol) {
    this._value = value;
    this._symbol = symbol;
  }

  get isAce() { return this._value === 1; }
  get value() { return this._value; }
  get symbol() { return this._symbol; }
}