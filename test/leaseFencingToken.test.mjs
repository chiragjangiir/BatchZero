import test from 'node:test';
import assert from 'node:assert/strict';
import { LeaseFencingToken } from '../lib/leaseFencingToken.js';

test('LeaseFencingToken increments monotonically and checks validity', () => {
  const ft = new LeaseFencingToken(10);
  assert.equal(ft.next(), 11);
  assert.equal(ft.isValid(11), true);
  assert.equal(ft.isValid(10), false);
});
