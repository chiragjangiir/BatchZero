import test from 'node:test';
import assert from 'node:assert/strict';
import { CircularBuffer } from '../lib/circularBuffer.js';

test('CircularBuffer overwrites oldest elements when capacity is exceeded', () => {
  const cb = new CircularBuffer(3);
  cb.push(1);
  cb.push(2);
  cb.push(3);
  cb.push(4);
  assert.equal(cb.size, 3);
  assert.equal(cb.pop(), 2);
  assert.equal(cb.pop(), 3);
  assert.equal(cb.pop(), 4);
});
