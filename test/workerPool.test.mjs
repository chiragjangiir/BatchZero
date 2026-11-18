import test from 'node:test';
import assert from 'node:assert/strict';
import { WorkerPool } from '../lib/workerPool.js';

test('WorkerPool enforces max concurrency', async () => {
  const pool = new WorkerPool(2);
  let activeMax = 0;
  let running = 0;

  const makeTask = (val) => async () => {
    running++;
    activeMax = Math.max(activeMax, running);
    await new Promise(r => setTimeout(r, 10));
    running--;
    return val;
  };

  const results = await Promise.all([
    pool.run(makeTask(1)),
    pool.run(makeTask(2)),
    pool.run(makeTask(3))
  ]);

  assert.deepEqual(results, [1, 2, 3]);
  assert.equal(activeMax <= 2, true);
});
