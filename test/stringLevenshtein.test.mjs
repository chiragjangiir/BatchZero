import test from 'node:test';
import assert from 'node:assert/strict';
import { computeLevenshtein } from '../lib/stringLevenshtein.js';

test('computeLevenshtein measures edit distance', () => {
  assert.equal(computeLevenshtein('kitten', 'sitting'), 3);
  assert.equal(computeLevenshtein('test', 'test'), 0);
});
