import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEnv } from '../lib/envValidator.js';

test('validateEnv checks presence of required keys', () => {
  const fakeEnv = { PORT: '3000', DB_URL: 'postgres://localhost' };
  assert.equal(validateEnv(['PORT', 'DB_URL'], fakeEnv).valid, true);
  const check = validateEnv(['PORT', 'SECRET'], fakeEnv);
  assert.equal(check.valid, false);
  assert.deepEqual(check.missing, ['SECRET']);
});
