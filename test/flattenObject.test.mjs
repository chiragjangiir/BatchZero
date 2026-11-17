import test from 'node:test';
import assert from 'node:assert/strict';
import { flattenObject } from '../lib/flattenObject.js';

test('flattenObject converts nested hierarchy to dot-paths', () => {
  const input = { user: { name: 'Alice', meta: { age: 30 } } };
  const flat = flattenObject(input);
  assert.deepEqual(flat, { 'user.name': 'Alice', 'user.meta.age': 30 });
});
