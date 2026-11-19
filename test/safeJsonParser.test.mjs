import test from 'node:test';
import assert from 'node:assert/strict';
import { safeJsonParse } from '../lib/safeJsonParser.js';

test('safeJsonParse returns fallback on malformed input', () => {
  assert.deepEqual(safeJsonParse('{"ok":true}'), { ok: true });
  assert.equal(safeJsonParse('{bad}', 'default'), 'default');
});
