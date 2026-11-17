import test from 'node:test';
import assert from 'node:assert/strict';
import { generateSecureToken } from '../lib/cryptoToken.js';

test('generateSecureToken produces hex string with exact length', () => {
  const token = generateSecureToken(16);
  assert.equal(token.length, 32);
});
