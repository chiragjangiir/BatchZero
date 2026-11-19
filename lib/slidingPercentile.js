export class SlidingPercentile {
  constructor(windowSize = 100) {
    this.windowSize = windowSize;
    this.samples = [];
  }

  add(val) {
    this.samples.push(val);
    if (this.samples.length > this.windowSize) {
      this.samples.shift();
    }
  }

  getPercentile(p) {
    if (this.samples.length === 0) return 0;
    const sorted = [...this.samples].sort((a, b) => a - b);
    const idx = Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length));
    return sorted[idx];
  }
}
