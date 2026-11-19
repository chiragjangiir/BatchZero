import test from 'node:test';
import assert from 'node:assert/strict';
import { SemaphoreQueue } from '../lib/semaphoreQueue.js';

test('SemaphoreQueue regulates weighted tickets', async () => {
  const sem = new SemaphoreQueue(2);
  const rel1 = await sem.acquire(2);
  assert.equal(sem.availableTickets, 0);
  rel1();
  assert.equal(sem.availableTickets, 2);
});
