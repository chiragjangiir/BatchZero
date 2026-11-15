import { test } from 'node:test';
import assert from 'node:assert';
import { slugify } from '../lib/slug.js';

test('slugify converts titles to url slugs', () => {
  assert.strictEqual(slugify('Hello World! 2026'), 'hello-world-2026');
  assert.strictEqual(slugify('  Campus Event & Workshop  '), 'campus-event-workshop');
  assert.strictEqual(slugify(''), '');
});
