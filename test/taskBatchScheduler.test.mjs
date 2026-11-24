import test from 'node:test';
import assert from 'node:assert/strict';
import { TaskBatchScheduler } from '../lib/taskBatchScheduler.js';

test('TaskBatchScheduler flushes on reaching capacity', () => {
  let flushedBatch = [];
  const scheduler = new TaskBatchScheduler(3, (batch) => {
    flushedBatch = batch;
  });
  scheduler.push(1);
  scheduler.push(2);
  assert.equal(scheduler.pending, 2);
  scheduler.push(3);
  assert.equal(scheduler.pending, 0);
  assert.deepEqual(flushedBatch, [1, 2, 3]);
});
