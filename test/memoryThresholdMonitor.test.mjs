import test from 'node:test';
import assert from 'node:assert/strict';
import { isMemoryAboveThreshold } from '../lib/memoryThresholdMonitor.js';

test('isMemoryAboveThreshold triggers warning at high-water mark', () => {
  assert.equal(isMemoryAboveThreshold(86, 100, 0.85), true);
  assert.equal(isMemoryAboveThreshold(80, 100, 0.85), false);
});
