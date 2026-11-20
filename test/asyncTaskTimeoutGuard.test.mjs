import test from 'node:test';
import assert from 'node:assert/strict';
import { withTimeout } from '../lib/asyncTaskTimeoutGuard.js';

test('withTimeout resolves prompt promise and rejects on deadline', async () => {
  const fast = withTimeout(Promise.resolve(42), 100);
  assert.equal(await fast, 42);
  const slow = withTimeout(new Promise(r => setTimeout(r, 50)), 10);
  await assert.rejects(slow, /Task timed out/);
});
