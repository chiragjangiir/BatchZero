import test from 'node:test';
import assert from 'node:assert/strict';
import { computeSha256, computeMd5 } from '../lib/hashChecksum.js';

test('computeSha256 produces 64-char hex', () => {
  const hash = computeSha256('hello world');
  assert.equal(hash.length, 64);
  assert.equal(hash, 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9');
});
