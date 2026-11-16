import test from 'node:test';
import assert from 'node:assert/strict';
import { diffObjects } from '../lib/objectDiff.js';

test('diffObjects computes object attribute deltas', () => {
  const a = { x: 1, y: 2 };
  const b = { y: 3, z: 4 };
  const diff = diffObjects(a, b);
  assert.deepEqual(diff.added, { z: 4 });
  assert.deepEqual(diff.removed, { x: 1 });
  assert.deepEqual(diff.modified, { y: { from: 2, to: 3 } });
});
