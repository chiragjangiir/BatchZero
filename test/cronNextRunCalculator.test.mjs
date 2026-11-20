import test from 'node:test';
import assert from 'node:assert/strict';
import { computeNextRunOffset } from '../lib/cronNextRunCalculator.js';

test('computeNextRunOffset calculates remaining delay', () => {
  assert.equal(computeNextRunOffset(60, 1000, 1020), 40);
  assert.equal(computeNextRunOffset(60, 1000, 1060), 0);
});
