import test from 'node:test';
import assert from 'node:assert/strict';
import { BitSet } from '../lib/bitSet.js';

test('BitSet stores and retrieves boolean flags', () => {
  const bs = new BitSet(64);
  bs.set(5);
  bs.set(40);
  assert.equal(bs.get(5), true);
  assert.equal(bs.get(40), true);
  assert.equal(bs.get(6), false);
  bs.clear(5);
  assert.equal(bs.get(5), false);
});
