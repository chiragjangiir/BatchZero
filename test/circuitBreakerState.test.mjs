import test from 'node:test';
import assert from 'node:assert/strict';
import { CircuitBreakerState, CircuitState } from '../lib/circuitBreakerState.js';

test('CircuitBreakerState transitions from closed to open upon failure threshold', () => {
  const cb = new CircuitBreakerState(2, 500);
  assert.equal(cb.canExecute(), true);
  cb.onFailure();
  assert.equal(cb.canExecute(), true);
  cb.onFailure();
  assert.equal(cb.canExecute(), false);
  assert.equal(cb.state, CircuitState.OPEN);
});
