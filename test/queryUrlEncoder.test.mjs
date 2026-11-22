import test from 'node:test';
import assert from 'node:assert/strict';
import { deterministicQueryString } from '../lib/queryUrlEncoder.js';

test('deterministicQueryString outputs canonical sorted query parameters', () => {
  assert.equal(deterministicQueryString({ z: '1', a: '2', m: '3' }), 'a=2&m=3&z=1');
});
