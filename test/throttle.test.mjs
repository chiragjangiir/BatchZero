import test from 'node:test';
import assert from 'node:assert/strict';
import { throttle } from '../lib/throttle.js';

test('throttle enforces execution spacing', async () => {
  let count = 0;
  const throttled = throttle(() => { count++; }, 50);
  throttled();
  throttled();
  assert.equal(count, 1);
});
