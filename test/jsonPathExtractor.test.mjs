import test from 'node:test';
import assert from 'node:assert/strict';
import { extractJsonPath } from '../lib/jsonPathExtractor.js';

test('extractJsonPath gets nested values safely', () => {
  const data = { user: { profile: { name: 'Chirag' } } };
  assert.equal(extractJsonPath(data, 'user.profile.name'), 'Chirag');
  assert.equal(extractJsonPath(data, 'user.profile.age', 25), 25);
  assert.equal(extractJsonPath(null, 'user.name', 'default'), 'default');
});
