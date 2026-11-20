import test from 'node:test';
import assert from 'node:assert/strict';
import { SlidingWindowAverager } from '../lib/slidingWindowAverager.js';

test('SlidingWindowAverager calculates windowed average', () => {
  const avg = new SlidingWindowAverager(3);
  avg.add(10);
  avg.add(20);
  avg.add(30);
  assert.equal(avg.getAverage(), 20);
  avg.add(40);
  assert.equal(avg.getAverage(), 30);
});
