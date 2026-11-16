import test from 'node:test';
import assert from 'node:assert/strict';
import { CircuitBreaker } from '../lib/circuitBreaker.js';

test('CircuitBreaker transitions to OPEN after failures', () => {
  const cb = new CircuitBreaker(2, 500);
  assert.equal(cb.canExecute(), true);
  cb.recordFailure();
  assert.equal(cb.canExecute(), true);
  cb.recordFailure();
  assert.equal(cb.canExecute(), false);
  cb.recordSuccess();
  assert.equal(cb.canExecute(), true);
});
