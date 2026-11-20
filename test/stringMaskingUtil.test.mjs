import test from 'node:test';
import assert from 'node:assert/strict';
import { maskSecret } from '../lib/stringMaskingUtil.js';

test('maskSecret preserves trailing visible characters', () => {
  assert.equal(maskSecret('secret-token-1234', 4), '*************1234');
  assert.equal(maskSecret('abc', 4), '***');
});
