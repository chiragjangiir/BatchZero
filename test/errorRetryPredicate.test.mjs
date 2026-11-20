import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldRetryError } from '../lib/errorRetryPredicate.js';

test('shouldRetryError flags HTTP transient status codes', () => {
  assert.equal(shouldRetryError(429), true);
  assert.equal(shouldRetryError(503), true);
  assert.equal(shouldRetryError(404), false);
});
