import test from 'node:test';
import assert from 'node:assert/strict';
import { TokenBucket } from '../lib/tokenBucket.js';

test('TokenBucket allows burst capacity and exhausts properly', () => {
  const tb = new TokenBucket(3, 1);
  assert.equal(tb.tryConsume(2), true);
  assert.equal(tb.tryConsume(1), true);
  assert.equal(tb.tryConsume(1), false);
});
