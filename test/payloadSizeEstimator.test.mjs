import test from 'node:test';
import assert from 'node:assert/strict';
import { estimatePayloadBytes } from '../lib/payloadSizeEstimator.js';

test('estimatePayloadBytes calculates accurate JSON byte length', () => {
  const size = estimatePayloadBytes({ a: 'hello' });
  assert.equal(size, 13);
});
