import test from 'node:test';
import assert from 'node:assert/strict';
import { escapeRegexString, createSafePattern } from '../lib/safeRegex.js';

test('escapeRegexString safely handles special regex characters', () => {
  const escaped = escapeRegexString('api.example.com?query=val[1]');
  assert.equal(escaped, 'api\\.example\\.com\\?query=val\\[1\\]');
  const regex = createSafePattern('hello.world');
  assert.equal(regex.test('hello.world'), true);
  assert.equal(regex.test('hello_world'), false);
});
