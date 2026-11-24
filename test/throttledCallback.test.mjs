import test from 'node:test';
import assert from 'node:assert/strict';
import { throttle } from '../lib/throttledCallback.js';

test('throttle limits call frequency', () => {
  let calls = 0;
  const throttled = throttle(() => { calls++; }, 100);
  throttled();
  throttled();
  assert.equal(calls, 1);
});
