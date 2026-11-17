import test from 'node:test';
import assert from 'node:assert/strict';
import { formatDuration } from '../lib/timeDurationFormat.js';

test('formatDuration formats scales from ms to hours', () => {
  assert.equal(formatDuration(500), '500ms');
  assert.equal(formatDuration(45000), '45s');
  assert.equal(formatDuration(125000), '2m 5s');
  assert.equal(formatDuration(3600000), '1h');
});
