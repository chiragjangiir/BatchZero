import test from 'node:test';
import assert from 'node:assert/strict';
import { getMemoryStats } from '../lib/memoryMonitor.js';

test('getMemoryStats returns formatted memory metrics', () => {
  const stats = getMemoryStats();
  assert.ok(parseFloat(stats.heapUsedMb) > 0);
  assert.ok(parseFloat(stats.rssMb) > 0);
});
