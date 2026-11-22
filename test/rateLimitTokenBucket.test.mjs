import test from 'node:test';
import assert from 'node:assert/strict';
import { RateLimitTokenBucket } from '../lib/rateLimitTokenBucket.js';

test('RateLimitTokenBucket handles token deduction and rejection', () => {
  const bucket = new RateLimitTokenBucket(2, 1);
  assert.equal(bucket.tryConsume(1), true);
  assert.equal(bucket.tryConsume(1), true);
  assert.equal(bucket.tryConsume(1), false);
});
