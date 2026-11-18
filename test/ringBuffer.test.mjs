import test from 'node:test';
import assert from 'node:assert/strict';
import { RingBuffer } from '../lib/ringBuffer.js';

test('RingBuffer maintains fixed capacity and drops oldest', () => {
  const rb = new RingBuffer(3);
  rb.push(1);
  rb.push(2);
  rb.push(3);
  assert.deepEqual(rb.toArray(), [1, 2, 3]);
  rb.push(4);
  assert.deepEqual(rb.toArray(), [2, 3, 4]);
});
