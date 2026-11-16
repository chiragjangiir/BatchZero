import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateBackoff } from '../lib/exponentialBackoff.js';

test('calculateBackoff scales exponentially', () => {
  assert.equal(calculateBackoff(1, 100, 10000), 100);
  assert.equal(calculateBackoff(2, 100, 10000), 200);
  assert.equal(calculateBackoff(3, 100, 10000), 400);
  assert.equal(calculateBackoff(10, 100, 1000), 1000);
});
