import test from 'node:test';
import assert from 'node:assert/strict';
import { buildQueryString } from '../lib/urlBuilder.js';

test('buildQueryString formats parameters correctly', () => {
  const qs = buildQueryString({ q: 'batch zero', tag: ['a', 'b'], empty: null });
  assert.equal(qs, '?q=batch%20zero&tag=a&tag=b');
});
