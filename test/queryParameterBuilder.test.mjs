import test from 'node:test';
import assert from 'node:assert/strict';
import { buildQuery } from '../lib/queryParameterBuilder.js';

test('buildQuery encodes query parameters', () => {
  assert.equal(buildQuery({ page: 1, limit: 10 }), '?page=1&limit=10');
  assert.equal(buildQuery({}), '');
});
