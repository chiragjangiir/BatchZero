import test from 'node:test';
import assert from 'node:assert/strict';
import { murmur32 } from '../lib/hashMurmur32.js';

test('murmur32 computes deterministic 32-bit hash', () => {
  const h1 = murmur32('batchzero');
  const h2 = murmur32('batchzero');
  assert.equal(h1, h2);
  assert.equal(typeof h1, 'number');
});
