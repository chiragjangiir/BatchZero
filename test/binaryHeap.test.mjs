import test from 'node:test';
import assert from 'node:assert/strict';
import { BinaryHeap } from '../lib/binaryHeap.js';

test('BinaryHeap maintains min priority order', () => {
  const heap = new BinaryHeap();
  heap.push(5);
  heap.push(1);
  heap.push(3);
  assert.equal(heap.pop(), 1);
  assert.equal(heap.pop(), 3);
  assert.equal(heap.pop(), 5);
  assert.equal(heap.pop(), undefined);
});
