import test from 'node:test';
import assert from 'node:assert/strict';
import { deduplicate } from '../lib/deduplicate.js';

test('deduplicate removes duplicate primitives and objects', () => {
  assert.deepEqual(deduplicate([1, 2, 2, 3, 1]), [1, 2, 3]);
  const objs = [{ id: 1 }, { id: 2 }, { id: 1 }];
  assert.deepEqual(deduplicate(objs, o => o.id), [{ id: 1 }, { id: 2 }]);
});
