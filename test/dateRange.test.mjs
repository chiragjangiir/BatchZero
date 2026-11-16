import test from 'node:test';
import assert from 'node:assert/strict';
import { generateDateRange } from '../lib/dateRange.js';

test('generateDateRange produces inclusive date sequence', () => {
  const range = generateDateRange('2026-11-14', '2026-11-16');
  assert.deepEqual(range, ['2026-11-14', '2026-11-15', '2026-11-16']);
});
