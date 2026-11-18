import test from 'node:test';
import assert from 'node:assert/strict';
import { partitionArray } from '../lib/partitionArray.js';

test('partitionArray divides items by boolean predicate', () => {
  const [evens, odds] = partitionArray([1, 2, 3, 4, 5], x => x % 2 === 0);
  assert.deepEqual(evens, [2, 4]);
  assert.deepEqual(odds, [1, 3, 5]);
});
