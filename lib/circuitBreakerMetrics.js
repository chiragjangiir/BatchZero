export class CircuitBreakerMetrics {
  constructor() {
    this.successCount = 0;
    this.failureCount = 0;
  }

  recordSuccess() {
    this.successCount++;
  }

  recordFailure() {
    this.failureCount++;
  }

  get failureRate() {
    const total = this.successCount + this.failureCount;
    return total === 0 ? 0.0 : this.failureCount / total;
  }
}
