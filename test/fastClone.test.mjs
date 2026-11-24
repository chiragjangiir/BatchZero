import test from 'node:test';
import assert from 'node:assert/strict';
import { fastClone } from '../lib/fastClone.js';

test('fastClone deep clones object structures', () => {
  const src = { a: 1, sub: { b: 2 } };
  const cloned = fastClone(src);
  assert.deepEqual(cloned, src);
  cloned.sub.b = 99;
  assert.equal(src.sub.b, 2);
});
