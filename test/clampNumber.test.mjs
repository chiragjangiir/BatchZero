import test from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../lib/clampNumber.js';

test('clamp restricts number to range', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-5, 0, 10), 0);
  assert.equal(clamp(15, 0, 10), 10);
});
