import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('alumni_mentors.json schema validation', () => {
  const p = path.join(__dirname, '../data/alumni_mentors.json');
  const d = JSON.parse(fs.readFileSync(p, 'utf-8'));
  assert.ok(Array.isArray(d.mentors));
  assert.strictEqual(d.mentors.length, 2);
});
