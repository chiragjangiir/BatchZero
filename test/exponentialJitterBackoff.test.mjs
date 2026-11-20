import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateExponentialJitter } from '../lib/exponentialJitterBackoff.js';

test('calculateExponentialJitter stays within bounds', () => {
  for (let i = 0; i < 5; i++) {
    const val = calculateExponentialJitter(2, 50, 1000);
    assert.equal(val >= 0 && val <= 200, true);
  }
});
