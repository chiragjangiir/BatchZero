import { test } from 'node:test';
import assert from 'node:assert';
import { filterByScoreRange } from '../lib/scoreFilter.js';

test('filterByScoreRange filters numbers within bounds', () => {
  const scores = [-0.8, -0.2, 0.1, 0.5, 0.9];
  const positive = filterByScoreRange(scores, 0.0, 1.0);
  assert.deepStrictEqual(positive, [0.1, 0.5, 0.9]);
});
