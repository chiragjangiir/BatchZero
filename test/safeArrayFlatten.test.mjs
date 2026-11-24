import test from 'node:test';
import assert from 'node:assert/strict';
import { safeFlatten } from '../lib/safeArrayFlatten.js';

test('safeFlatten flattens array to specified depth', () => {
  assert.deepEqual(safeFlatten([1, [2, [3]]], 1), [1, 2, [3]]);
  assert.deepEqual(safeFlatten([1, [2, [3]]], 2), [1, 2, 3]);
});
