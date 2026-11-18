import test from 'node:test';
import assert from 'node:assert/strict';
import { pipeAsync } from '../lib/pipeAsync.js';

test('pipeAsync composes functions sequentially', async () => {
  const add2 = async x => x + 2;
  const double = x => x * 2;
  const pipeline = pipeAsync(add2, double);
  const result = await pipeline(3);
  assert.equal(result, 10);
});
