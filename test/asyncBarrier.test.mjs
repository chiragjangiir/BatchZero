import test from 'node:test';
import assert from 'node:assert/strict';
import { AsyncBarrier } from '../lib/asyncBarrier.js';

test('AsyncBarrier coordinates multiple asynchronous workers', async () => {
  const barrier = new AsyncBarrier(3);
  let counter = 0;
  const p1 = barrier.wait().then(() => { counter++; });
  const p2 = barrier.wait().then(() => { counter++; });
  assert.equal(counter, 0);
  await barrier.wait();
  await Promise.all([p1, p2]);
  assert.equal(counter, 2);
});
