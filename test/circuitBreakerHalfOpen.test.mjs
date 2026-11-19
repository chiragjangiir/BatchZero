import test from 'node:test';
import assert from 'node:assert/strict';
import { CircuitBreakerHalfOpen } from '../lib/circuitBreakerHalfOpen.js';

test('CircuitBreaker transitions to HALF_OPEN and recovers', () => {
  const cb = new CircuitBreakerHalfOpen(2, 2);
  cb.recordFailure();
  cb.recordFailure();
  assert.equal(cb.state, 'OPEN');
  cb.transitionToHalfOpen();
  assert.equal(cb.state, 'HALF_OPEN');
  cb.recordSuccess();
  cb.recordSuccess();
  assert.equal(cb.state, 'CLOSED');
});
