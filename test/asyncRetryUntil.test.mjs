import test from 'node:test';
import assert from 'node:assert/strict';
import { retryUntil } from '../lib/asyncRetryUntil.js';

test('retryUntil polls until condition succeeds', async () => {
  let count = 0;
  const res = await retryUntil(async () => ++count, c => c === 3, 5, 2);
  assert.equal(res, 3);
});
