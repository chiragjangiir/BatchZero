export class CircuitBreakerHalfOpen {
  constructor(failureThreshold = 3, probeCount = 2) {
    this.failureThreshold = failureThreshold;
    this.probeCount = probeCount;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.failures = 0;
    this.successesInHalfOpen = 0;
  }

  recordSuccess() {
    if (this.state === 'HALF_OPEN') {
      this.successesInHalfOpen++;
      if (this.successesInHalfOpen >= this.probeCount) {
        this.state = 'CLOSED';
        this.failures = 0;
        this.successesInHalfOpen = 0;
      }
    } else {
      this.failures = 0;
    }
  }

  recordFailure() {
    this.failures++;
    if (this.failures >= this.failureThreshold || this.state === 'HALF_OPEN') {
      this.state = 'OPEN';
    }
  }

  transitionToHalfOpen() {
    this.state = 'HALF_OPEN';
    this.successesInHalfOpen = 0;
  }
}
