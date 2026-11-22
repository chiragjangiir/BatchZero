import test from 'node:test';
import assert from 'node:assert/strict';
import { chunkArray } from '../lib/batchItemGrouper.js';

test('chunkArray partitions items into chunks of bounded size', () => {
  const items = [1, 2, 3, 4, 5];
  const chunks = chunkArray(items, 2);
  assert.deepEqual(chunks, [[1, 2], [3, 4], [5]]);
});
