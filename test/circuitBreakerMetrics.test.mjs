import test from 'node:test';
import assert from 'node:assert/strict';
import { CircuitBreakerMetrics } from '../lib/circuitBreakerMetrics.js';

test('CircuitBreakerMetrics calculates failure rate', () => {
  const m = new CircuitBreakerMetrics();
  m.recordSuccess();
  m.recordFailure();
  assert.equal(m.failureRate, 0.5);
});
