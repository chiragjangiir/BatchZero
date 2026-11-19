import test from 'node:test';
import assert from 'node:assert/strict';
import { deduplicateBatch } from '../lib/batchDeduplicator.js';

test('deduplicateBatch preserves first occurrence by key', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 1 }];
  assert.deepEqual(deduplicateBatch(items, x => x.id), [{ id: 1 }, { id: 2 }]);
});
