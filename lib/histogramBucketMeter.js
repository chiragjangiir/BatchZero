export class HistogramBucketMeter {
  constructor(boundaries = [10, 50, 100, 500, 1000]) {
    this.boundaries = boundaries.slice().sort((a, b) => a - b);
    this.counts = new Array(this.boundaries.length + 1).fill(0);
  }

  record(value) {
    for (let i = 0; i < this.boundaries.length; i++) {
      if (value <= this.boundaries[i]) {
        this.counts[i]++;
        return;
      }
    }
    this.counts[this.boundaries.length]++;
  }

  getSnapshot() {
    return this.counts.slice();
  }
}
