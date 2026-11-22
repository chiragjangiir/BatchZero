import test from 'node:test';
import assert from 'node:assert/strict';
import { computeBackoffDelay } from '../lib/exponentialBackoffTimer.js';

test('computeBackoffDelay scales exponentially up to cap', () => {
  assert.equal(computeBackoffDelay(0, 100, 1000), 100);
  assert.equal(computeBackoffDelay(1, 100, 1000), 200);
  assert.equal(computeBackoffDelay(2, 100, 1000), 400);
  assert.equal(computeBackoffDelay(10, 100, 1000), 1000);
});
