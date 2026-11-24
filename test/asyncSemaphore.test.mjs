import test from 'node:test';
import assert from 'node:assert/strict';
import { AsyncSemaphore } from '../lib/asyncSemaphore.js';

test('AsyncSemaphore limits concurrent worker access', async () => {
  const sem = new AsyncSemaphore(1);
  let active = 0;
  let maxActive = 0;

  async function work() {
    await sem.acquire();
    active++;
    maxActive = Math.max(maxActive, active);
    await new Promise(r => setTimeout(r, 10));
    active--;
    sem.release();
  }

  await Promise.all([work(), work(), work()]);
  assert.equal(maxActive, 1);
});
