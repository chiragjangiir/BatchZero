import test from 'node:test';
import assert from 'node:assert/strict';
import { SlidingPercentile } from '../lib/slidingPercentile.js';

test('SlidingPercentile computes percentile ranks', () => {
  const sp = new SlidingPercentile(10);
  for (let i = 1; i <= 10; i++) sp.add(i);
  assert.equal(sp.getPercentile(50), 6);
});
