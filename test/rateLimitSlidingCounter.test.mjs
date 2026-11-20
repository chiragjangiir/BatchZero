import test from 'node:test';
import assert from 'node:assert/strict';
import { RateLimitSlidingCounter } from '../lib/rateLimitSlidingCounter.js';

test('RateLimitSlidingCounter enforces burst limit', () => {
  const limiter = new RateLimitSlidingCounter(2, 100);
  assert.equal(limiter.tryAcquire(1000), true);
  assert.equal(limiter.tryAcquire(1020), true);
  assert.equal(limiter.tryAcquire(1040), false);
  assert.equal(limiter.tryAcquire(1110), true);
});
