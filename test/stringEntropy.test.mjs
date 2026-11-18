import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateShannonEntropy } from '../lib/stringEntropy.js';

test('calculateShannonEntropy computes entropy correctly', () => {
  assert.equal(calculateShannonEntropy('aaaa'), 0.0);
  assert.equal(calculateShannonEntropy('ab'), 1.0);
  const entropy = calculateShannonEntropy('abcdefgh');
  assert.equal(entropy > 2.5, true);
});
