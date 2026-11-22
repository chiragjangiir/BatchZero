import test from 'node:test';
import assert from 'node:assert/strict';
import { safeStringify } from '../lib/jsonSafeStringify.js';

test('safeStringify serializes BigInt and breaks circular references', () => {
  const obj = { id: 10n };
  obj.self = obj;
  const str = safeStringify(obj);
  assert.equal(str, '{"id":"10","self":"[Circular]"}');
});
