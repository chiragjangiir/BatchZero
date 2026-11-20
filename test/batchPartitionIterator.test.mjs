import test from 'node:test';
import assert from 'node:assert/strict';
import { partitionBatch } from '../lib/batchPartitionIterator.js';

test('partitionBatch splits items cleanly', () => {
  const parts = partitionBatch([1, 2, 3, 4], 2);
  assert.deepEqual(parts, [[1, 2], [3, 4]]);
});
