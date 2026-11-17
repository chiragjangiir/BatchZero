import test from 'node:test';
import assert from 'node:assert/strict';
import { deepClone } from '../lib/deepClone.js';

test('deepClone creates distinct copy of nested objects', () => {
  const orig = { a: 1, b: { c: 2 }, d: [3, 4] };
  const clone = deepClone(orig);
  assert.deepEqual(clone, orig);
  clone.b.c = 99;
  assert.equal(orig.b.c, 2);
});
