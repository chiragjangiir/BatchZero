import test from 'node:test';
import assert from 'node:assert/strict';
import { sortObjectKeys } from '../lib/objectKeySorter.js';

test('sortObjectKeys recursively orders dictionary keys', () => {
  const input = { z: 1, a: { y: 2, b: 3 } };
  const keys = Object.keys(sortObjectKeys(input));
  assert.deepEqual(keys, ['a', 'z']);
});
