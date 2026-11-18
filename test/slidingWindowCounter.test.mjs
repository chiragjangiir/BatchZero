import test from 'node:test';
import assert from 'node:assert/strict';
import { SlidingWindowCounter } from '../lib/slidingWindowCounter.js';

test('SlidingWindowCounter prunes expired events', () => {
  const counter = new SlidingWindowCounter(100);
  counter.record(1000);
  counter.record(1050);
  assert.equal(counter.count(1080), 2);
  assert.equal(counter.count(1120), 1);
  assert.equal(counter.count(1200), 0);
});
