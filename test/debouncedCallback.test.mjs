import test from 'node:test';
import assert from 'node:assert/strict';
import { debounce } from '../lib/debouncedCallback.js';

test('debounce coalesces burst invocations', async () => {
  let count = 0;
  const debounced = debounce(() => { count++; }, 20);
  debounced();
  debounced();
  debounced();
  assert.equal(count, 0);
  await new Promise(r => setTimeout(r, 40));
  assert.equal(count, 1);
});
