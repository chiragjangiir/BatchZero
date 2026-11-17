import test from 'node:test';
import assert from 'node:assert/strict';
import { debounce } from '../lib/debounce.js';

test('debounce coalesces rapid calls', async () => {
  let count = 0;
  const debounced = debounce(() => { count++; }, 20);
  debounced();
  debounced();
  debounced();
  await new Promise(r => setTimeout(r, 50));
  assert.equal(count, 1);
});
