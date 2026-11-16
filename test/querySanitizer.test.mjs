import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeSearchQuery } from '../lib/querySanitizer.js';

test('sanitizeSearchQuery strips injection tokens', () => {
  assert.equal(sanitizeSearchQuery('hello $where 1=1'), 'hello where 1=1');
  assert.equal(sanitizeSearchQuery('   find   user   '), 'find user');
});
