import test from 'node:test';
import assert from 'node:assert/strict';
import { PriorityTaskQueue } from '../lib/priorityTaskQueue.js';

test('PriorityTaskQueue dequeues highest priority first', () => {
  const pq = new PriorityTaskQueue();
  pq.enqueue('low', 1);
  pq.enqueue('critical', 10);
  pq.enqueue('medium', 5);
  assert.equal(pq.dequeue(), 'critical');
  assert.equal(pq.dequeue(), 'medium');
  assert.equal(pq.dequeue(), 'low');
});
