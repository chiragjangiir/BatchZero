export class RateLimitSlidingCounter {
  constructor(limit = 10, windowMs = 1000) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.events = [];
  }

  tryAcquire(now = Date.now()) {
    const cutoff = now - this.windowMs;
    while (this.events.length > 0 && this.events[0] <= cutoff) {
      this.events.shift();
    }
    if (this.events.length < this.limit) {
      this.events.push(now);
      return true;
    }
    return false;
  }
}
