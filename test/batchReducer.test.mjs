import test from 'node:test';
import assert from 'node:assert/strict';
import { reduceInBatches } from '../lib/batchReducer.js';

test('reduceInBatches processes array in chunked windows', async () => {
  const items = [1, 2, 3, 4, 5];
  const sum = await reduceInBatches(items, 2, async (acc, batch) => {
    return acc + batch.reduce((a, b) => a + b, 0);
  }, 0);
  assert.equal(sum, 15);
});
