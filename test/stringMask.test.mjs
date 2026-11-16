import test from 'node:test';
import assert from 'node:assert/strict';
import { maskString } from '../lib/stringMask.js';

test('maskString masks sensitive middle characters', () => {
  assert.equal(maskString('secret_api_key_12345', 4, 4), 'secr************2345');
  assert.equal(maskString('short', 3, 3), '*****');
});
