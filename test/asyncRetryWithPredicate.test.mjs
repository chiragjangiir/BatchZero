import test from 'node:test';
import assert from 'node:assert/strict';
import { retryWithPredicate } from '../lib/asyncRetryWithPredicate.js';

test('retryWithPredicate retries on match and succeeds', async () => {
  let tries = 0;
  const result = await retryWithPredicate(
    async () => {
      tries++;
      if (tries < 3) throw new Error('TRANSIENT');
      return 'OK';
    },
    (err) => err.message === 'TRANSIENT',
    3
  );
  assert.equal(result, 'OK');
  assert.equal(tries, 3);
});
