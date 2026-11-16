import test from 'node:test';
import assert from 'node:assert/strict';
import { chunkArray } from '../lib/batchChunker.js';

test('chunkArray splits array into evenly sized partitions', () => {
  const items = [1, 2, 3, 4, 5];
  const chunks = chunkArray(items, 2);
  assert.deepEqual(chunks, [[1, 2], [3, 4], [5]]);
});
