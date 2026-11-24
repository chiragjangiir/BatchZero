import test from 'node:test';
import assert from 'node:assert/strict';
import { isHexString } from '../lib/hexStringValidator.js';

test('isHexString validates hex format and length', () => {
  assert.equal(isHexString('deadbeef'), true);
  assert.equal(isHexString('deadbeef', 8), true);
  assert.equal(isHexString('deadbeef', 10), false);
  assert.equal(isHexString('xyz123'), false);
});
