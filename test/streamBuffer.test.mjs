import test from 'node:test';
import assert from 'node:assert/strict';
import { StreamBuffer } from '../lib/streamBuffer.js';

test('StreamBuffer tracks length and highWaterMark backpressure', () => {
  const sb = new StreamBuffer(10);
  const canContinue = sb.write('hello');
  assert.equal(canContinue, true);
  const backpressure = sb.write('world123');
  assert.equal(backpressure, false);
  const chunks = sb.flush();
  assert.equal(chunks.length, 2);
  assert.equal(sb.currentLength, 0);
});
