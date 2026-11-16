import test from 'node:test';
import assert from 'node:assert/strict';
import { AsyncSemaphore } from '../lib/asyncSemaphore.js';

test('AsyncSemaphore limits concurrency to capacity', async () => {
  const sem = new AsyncSemaphore(2);
  let active = 0;
  let maxActive = 0;

  const task = async () => {
    await sem.acquire();
    active++;
    maxActive = Math.max(maxActive, active);
    await new Promise(r => setTimeout(r, 10));
    active--;
    sem.release();
  };

  await Promise.all([task(), task(), task(), task()]);
  assert.ok(maxActive <= 2);
});
