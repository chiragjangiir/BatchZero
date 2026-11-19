import test from 'node:test';
import assert from 'node:assert/strict';
import { isTransientError } from '../lib/errorClassifier.js';

test('isTransientError classifies retryable network faults', () => {
  assert.equal(isTransientError(new Error('ECONNRESET')), true);
  assert.equal(isTransientError(new Error('SyntaxError: invalid token')), false);
});
