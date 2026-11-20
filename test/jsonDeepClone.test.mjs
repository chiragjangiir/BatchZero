import test from 'node:test';
import assert from 'node:assert/strict';
import { cloneJson } from '../lib/jsonDeepClone.js';

test('cloneJson deeply isolates objects', () => {
  const orig = { a: [1, 2], b: { c: 3 } };
  const clone = cloneJson(orig);
  clone.a.push(3);
  assert.equal(orig.a.length, 2);
  assert.deepEqual(orig.b, clone.b);
});
