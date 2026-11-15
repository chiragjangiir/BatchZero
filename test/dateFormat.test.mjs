import { test } from 'node:test';
import assert from 'node:assert';
import { formatRelativeTime } from '../lib/dateFormat.js';

test('formatRelativeTime formats timestamps', () => {
  const now = new Date('2026-11-15T10:00:00Z');
  assert.strictEqual(formatRelativeTime(new Date('2026-11-15T09:59:30Z'), now), 'just now');
  assert.strictEqual(formatRelativeTime(new Date('2026-11-15T09:45:00Z'), now), '15m ago');
  assert.strictEqual(formatRelativeTime(new Date('2026-11-15T08:00:00Z'), now), '2h ago');
  assert.strictEqual(formatRelativeTime(new Date('2026-11-13T10:00:00Z'), now), '2d ago');
});
