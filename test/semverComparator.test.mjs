import test from 'node:test';
import assert from 'node:assert/strict';
import { compareSemver } from '../lib/semverComparator.js';

test('compareSemver orders semantic versions accurately', () => {
  assert.equal(compareSemver('1.2.3', '1.2.3'), 0);
  assert.equal(compareSemver('2.0.0', '1.9.9'), 1);
  assert.equal(compareSemver('1.2.0', '1.2.4'), -1);
});
