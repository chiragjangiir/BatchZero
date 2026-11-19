import test from 'node:test';
import assert from 'node:assert/strict';
import { AsyncMutex } from '../lib/asyncMutex.js';

test('AsyncMutex guarantees mutual exclusion', async () => {
  const mutex = new AsyncMutex();
  let counter = 0;
  const inc = async () => {
    const release = await mutex.acquire();
    try {
      const val = counter;
      await new Promise(r => setTimeout(r, 5));
      counter = val + 1;
    } finally {
      release();
    }
  };
  await Promise.all([inc(), inc(), inc()]);
  assert.equal(counter, 3);
});
