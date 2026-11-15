import { test } from 'node:test';
import assert from 'node:assert';
import { validateStoryInput } from '../lib/validateStory.js';

test('validateStoryInput checks required length', () => {
  assert.strictEqual(validateStoryInput('Lead', 'Detailed campus experience narrative.').valid, true);
  assert.strictEqual(validateStoryInput('', 'Short').valid, false);
});
