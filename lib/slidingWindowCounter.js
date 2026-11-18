export class SlidingWindowCounter {
  constructor(windowMs = 1000) {
    this.windowMs = windowMs;
    this.timestamps = [];
  }

  record(now = Date.now()) {
    this.timestamps.push(now);
    this.prune(now);
  }

  count(now = Date.now()) {
    this.prune(now);
    return this.timestamps.length;
  }

  prune(now = Date.now()) {
    const cutoff = now - this.windowMs;
    while (this.timestamps.length > 0 && this.timestamps[0] <= cutoff) {
      this.timestamps.shift();
    }
  }
}
