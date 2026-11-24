export class AsyncSemaphore {
  constructor(maxPermits = 1) {
    this.permits = maxPermits;
    this.waiters = [];
  }

  async acquire() {
    if (this.permits > 0) {
      this.permits--;
      return;
    }
    return new Promise(resolve => this.waiters.push(resolve));
  }

  release() {
    if (this.waiters.length > 0) {
      const next = this.waiters.shift();
      next();
    } else {
      this.permits++;
    }
  }
}
