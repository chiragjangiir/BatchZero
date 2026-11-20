export class LeaseFencingToken {
  constructor(initial = 0) {
    this.currentToken = initial;
  }

  next() {
    return ++this.currentToken;
  }

  isValid(token) {
    return token >= this.currentToken;
  }
}
