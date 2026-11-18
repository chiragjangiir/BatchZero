import test from 'node:test';
import assert from 'node:assert/strict';
import { computeBackoffJitter } from '../lib/backoffJitter.js';

test('computeBackoffJitter bounds delay between 0 and max exponential', () => {
  for (let i = 0; i < 10; i++) {
    const delay = computeBackoffJitter(2, 100, 1000);
    assert.equal(delay >= 0 && delay <= 400, true);
  }
});
