import test from 'node:test';
import assert from 'node:assert/strict';
import { weightedSample } from '../lib/weightedSampler.js';

test('weightedSample picks deterministic element with fixed rng', () => {
  const items = ['A', 'B'];
  const weights = [10, 90];
  const item = weightedSample(items, weights, () => 0.05);
  assert.equal(item, 'A');
  const item2 = weightedSample(items, weights, () => 0.5);
  assert.equal(item2, 'B');
});
