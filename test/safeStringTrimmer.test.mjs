import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeWhitespace } from '../lib/safeStringTrimmer.js';

test('normalizeWhitespace collapses duplicate spaces and newlines', () => {
  assert.equal(normalizeWhitespace('  hello \n\t world  '), 'hello world');
});
