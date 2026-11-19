import test from 'node:test';
import assert from 'node:assert/strict';
import { murmurHash3 } from '../lib/murmurHash3.js';

test('murmurHash3 produces deterministic 32-bit hash', () => {
  const h1 = murmurHash3('test-payload');
  const h2 = murmurHash3('test-payload');
  assert.equal(h1, h2);
  assert.equal(typeof h1, 'number');
});
