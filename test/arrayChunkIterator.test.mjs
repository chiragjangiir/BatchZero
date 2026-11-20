import test from 'node:test';
import assert from 'node:assert/strict';
import { chunkIterator } from '../lib/arrayChunkIterator.js';

test('chunkIterator yields slices lazily', () => {
  const items = [1, 2, 3, 4, 5];
  const chunks = [...chunkIterator(items, 2)];
  assert.deepEqual(chunks, [[1, 2], [3, 4], [5]]);
});
