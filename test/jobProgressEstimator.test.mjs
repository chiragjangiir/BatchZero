import test from 'node:test';
import assert from 'node:assert/strict';
import { estimateProgress } from '../lib/jobProgressEstimator.js';

test('estimateProgress calculates completion percentage and ETA', () => {
  const res = estimateProgress(50, 100, 1000);
  assert.equal(res.percent, 50);
  assert.equal(res.etaMs, 1000);
});
