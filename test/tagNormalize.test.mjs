import { test } from 'node:test';
import assert from 'node:assert';
import { normalizeTag } from '../lib/tagNormalize.js';

test('normalizeTag strips punctuation and spaces', () => {
  assert.strictEqual(normalizeTag('#Hackathon-2026!'), 'hackathon2026');
  assert.strictEqual(normalizeTag(''), '');
});
