import test from 'node:test';
import assert from 'node:assert/strict';
import { levenshteinDistance } from '../lib/stringSimilarity.js';

test('levenshteinDistance computes string edit distance', () => {
  assert.equal(levenshteinDistance('kitten', 'sitting'), 3);
  assert.equal(levenshteinDistance('same', 'same'), 0);
});
