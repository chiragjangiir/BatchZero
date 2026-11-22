import test from 'node:test';
import assert from 'node:assert/strict';
import { deepFreeze } from '../lib/objectDeepFreeze.js';

test('deepFreeze immutably freezes nested properties', () => {
  const data = { config: { timeout: 5000 } };
  deepFreeze(data);
  assert.throws(() => {
    data.config.timeout = 1000;
  }, TypeError);
});
