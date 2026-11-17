import test from 'node:test';
import assert from 'node:assert/strict';
import { withTimeout } from '../lib/promiseTimeout.js';

test('withTimeout resolves before deadline', async () => {
  const res = await withTimeout(Promise.resolve('ok'), 100);
  assert.equal(res, 'ok');
});
