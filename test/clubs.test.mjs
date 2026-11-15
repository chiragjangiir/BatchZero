import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('clubs_registry.json schema verification', () => {
  const file = path.join(__dirname, '../data/clubs_registry.json');
  assert.ok(fs.existsSync(file), 'Registry file must exist');

  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  assert.ok(Array.isArray(data.clubs), 'clubs must be an array');
  assert.ok(data.clubs.length >= 3, 'must contain at least 3 clubs');

  for (const club of data.clubs) {
    assert.ok(club.id, 'club must have id');
    assert.ok(club.name, 'club must have name');
    assert.ok(club.activeMembers > 0, 'activeMembers must be positive');
  }
});
