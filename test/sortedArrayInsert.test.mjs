import test from 'node:test';
import assert from 'node:assert/strict';
import { sortedInsert } from '../lib/sortedArrayInsert.js';

test('sortedInsert inserts item preserving order', () => {
  const arr = [1, 3, 5, 7];
  sortedInsert(arr, 4);
  assert.deepEqual(arr, [1, 3, 4, 5, 7]);
});
