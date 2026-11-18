import test from 'node:test';
import assert from 'node:assert/strict';
import { BatchPipeline } from '../lib/batchPipeline.js';

test('BatchPipeline processes items across sequential stages', async () => {
  const pipeline = new BatchPipeline()
    .addStage('double', x => x * 2)
    .addStage('increment', x => x + 1);

  const out = await pipeline.process([1, 2, 3]);
  assert.deepEqual(out, [3, 5, 7]);
});
