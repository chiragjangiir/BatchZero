import test from 'node:test';
import assert from 'node:assert/strict';
import { PriorityQueue } from '../lib/priorityQueue.js';

test('PriorityQueue orders items by comparator', () => {
  const pq = new PriorityQueue((a, b) => a - b);
  pq.push(10);
  pq.push(2);
  pq.push(5);
  assert.equal(pq.pop(), 2);
  assert.equal(pq.pop(), 5);
  assert.equal(pq.pop(), 10);
});
