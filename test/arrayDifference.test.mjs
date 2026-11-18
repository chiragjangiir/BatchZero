import test from 'node:test';
import assert from 'node:assert/strict';
import { arrayDifference } from '../lib/arrayDifference.js';

test('arrayDifference returns elements in A not in B', () => {
  assert.deepEqual(arrayDifference([1, 2, 3, 4], [2, 4]), [1, 3]);
  assert.deepEqual(arrayDifference([1, 2], []), [1, 2]);
  assert.deepEqual(arrayDifference([], [1, 2]), []);
});
