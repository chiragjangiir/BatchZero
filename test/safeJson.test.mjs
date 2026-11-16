import test from 'node:test';
import assert from 'node:assert/strict';
import { safeJsonParse, safeJsonStringify } from '../lib/safeJson.js';

test('safeJson handles invalid JSON and circular references', () => {
  assert.equal(safeJsonParse('{invalid}', 'fallback'), 'fallback');
  assert.deepEqual(safeJsonParse('{"ok":true}'), { ok: true });

  const circular = {};
  circular.self = circular;
  assert.equal(safeJsonStringify(circular), '{"self":"[Circular]"}');
});
