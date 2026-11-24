import test from 'node:test';
import assert from 'node:assert/strict';
import { diffObjects } from '../lib/objectDiffSummary.js';

test('diffObjects computes object key deltas', () => {
  const a = { x: 1, y: 2 };
  const b = { y: 3, z: 4 };
  const diff = diffObjects(a, b);
  assert.deepEqual(diff.added, ['z']);
  assert.deepEqual(diff.modified, ['y']);
  assert.deepEqual(diff.removed, ['x']);
});
