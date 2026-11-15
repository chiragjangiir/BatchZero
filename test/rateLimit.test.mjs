import { test } from 'node:test';
import assert from 'node:assert';
import { TokenBucketRateLimiter } from '../lib/rateLimit.js';

test('TokenBucket initializes with full capacity', () => {
  const limiter = new TokenBucketRateLimiter(5, 1);
  assert.strictEqual(limiter.getAvailableTokens(), 5);
});

test('TokenBucket consumes available tokens', () => {
  const limiter = new TokenBucketRateLimiter(5, 1);
  assert.strictEqual(limiter.tryConsume(3), true);
  assert.strictEqual(limiter.getAvailableTokens(), 2);
  assert.strictEqual(limiter.tryConsume(2), true);
  assert.strictEqual(limiter.tryConsume(1), false);
});
