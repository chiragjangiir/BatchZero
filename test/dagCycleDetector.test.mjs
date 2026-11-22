import test from 'node:test';
import assert from 'node:assert/strict';
import { hasCycle } from '../lib/dagCycleDetector.js';

test('hasCycle accurately detects cyclic and acyclic task graphs', () => {
  assert.equal(hasCycle({ a: ['b'], b: ['c'], c: [] }), false);
  assert.equal(hasCycle({ a: ['b'], b: ['c'], c: ['a'] }), true);
});
