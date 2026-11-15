import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('placement_stats.json schema integrity', () => {
  const p = path.join(__dirname, '../data/placement_stats.json');
  const d = JSON.parse(fs.readFileSync(p, 'utf-8'));
  assert.ok(Array.isArray(d.placementBatches));
  assert.ok(d.placementBatches.length >= 2);
});
