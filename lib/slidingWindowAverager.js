export class SlidingWindowAverager {
  constructor(windowSize = 10) {
    this.windowSize = windowSize;
    this.values = [];
  }

  add(val) {
    this.values.push(val);
    if (this.values.length > this.windowSize) {
      this.values.shift();
    }
  }

  getAverage() {
    if (this.values.length === 0) return 0;
    const sum = this.values.reduce((acc, v) => acc + v, 0);
    return sum / this.values.length;
  }
}
