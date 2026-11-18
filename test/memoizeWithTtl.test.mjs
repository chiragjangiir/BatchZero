import test from 'node:test';
import assert from 'node:assert/strict';
import { memoizeWithTtl } from '../lib/memoizeWithTtl.js';

test('memoizeWithTtl returns cached values within window', async () => {
  let calls = 0;
  const square = memoizeWithTtl(x => { calls++; return x * x; }, 30);
  assert.equal(square(4), 16);
  assert.equal(square(4), 16);
  assert.equal(calls, 1);
  await new Promise(r => setTimeout(r, 40));
  assert.equal(square(4), 16);
  assert.equal(calls, 2);
});
