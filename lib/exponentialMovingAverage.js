export class ExponentialMovingAverage {
  constructor(alpha = 0.2) {
    this.alpha = alpha;
    this.current = null;
  }

  update(value) {
    if (this.current === null) {
      this.current = value;
    } else {
      this.current = this.alpha * value + (1 - this.alpha) * this.current;
    }
    return this.current;
  }

  get value() {
    return this.current !== null ? this.current : 0;
  }
}
