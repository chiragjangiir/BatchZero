import test from 'node:test';
import assert from 'node:assert/strict';
import { immutableSplice } from '../lib/immutableArraySplice.js';

test('immutableSplice updates array without mutating source', () => {
  const orig = [1, 2, 4];
  const next = immutableSplice(orig, 2, 0, 3);
  assert.deepEqual(next, [1, 2, 3, 4]);
  assert.deepEqual(orig, [1, 2, 4]);
});
