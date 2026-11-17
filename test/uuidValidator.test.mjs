import test from 'node:test';
import assert from 'node:assert/strict';
import { isUuidV4 } from '../lib/uuidValidator.js';

test('isUuidV4 validates standard UUID format', () => {
  assert.equal(isUuidV4('c56a4180-65aa-42ec-a945-5fd21dec0538'), true);
  assert.equal(isUuidV4('not-a-uuid'), false);
});
