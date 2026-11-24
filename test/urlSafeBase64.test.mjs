import test from 'node:test';
import assert from 'node:assert/strict';
import { encodeBase64Url, decodeBase64Url } from '../lib/urlSafeBase64.js';

test('encodeBase64Url round-trips correctly', () => {
  const original = 'Hello World? Special chars: +/=';
  const encoded = encodeBase64Url(original);
  assert.equal(encoded.includes('+'), false);
  assert.equal(encoded.includes('/'), false);
  assert.equal(decodeBase64Url(encoded), original);
});
