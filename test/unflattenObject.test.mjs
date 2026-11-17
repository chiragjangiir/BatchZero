import test from 'node:test';
import assert from 'node:assert/strict';
import { unflattenObject } from '../lib/unflattenObject.js';

test('unflattenObject reconstructs nested structure', () => {
  const flat = { 'a.b.c': 42, 'x': 'y' };
  const nested = unflattenObject(flat);
  assert.deepEqual(nested, { a: { b: { c: 42 } }, x: 'y' });
});
