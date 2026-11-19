import test from 'node:test';
import assert from 'node:assert/strict';
import { deepMerge } from '../lib/deepMerge.js';

test('deepMerge recursively combines objects', () => {
  const a = { x: 1, cfg: { host: 'localhost', port: 80 } };
  const b = { y: 2, cfg: { port: 443 } };
  assert.deepEqual(deepMerge(a, b), { x: 1, y: 2, cfg: { host: 'localhost', port: 443 } });
});
