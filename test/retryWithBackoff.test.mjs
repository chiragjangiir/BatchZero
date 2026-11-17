import test from 'node:test';
import assert from 'node:assert/strict';
import { retryWithBackoff } from '../lib/retryWithBackoff.js';

test('retryWithBackoff retries until success', async () => {
  let calls = 0;
  const res = await retryWithBackoff(async () => {
    calls++;
    if (calls < 2) throw new Error('fail');
    return 'ok';
  }, 3, 1);
  assert.equal(res, 'ok');
  assert.equal(calls, 2);
});
