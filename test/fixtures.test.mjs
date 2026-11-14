import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('fixtures.json has valid structure and schema', () => {
  const filePath = path.join(__dirname, '../data/fixtures.json');
  assert.ok(fs.existsSync(filePath), 'data/fixtures.json must exist');

  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  assert.ok(Array.isArray(content.campusEntities), 'campusEntities must be an array');
  assert.ok(Array.isArray(content.sampleStories), 'sampleStories must be an array');

  for (const entity of content.campusEntities) {
    assert.ok(entity.id, 'entity must have id');
    assert.ok(entity.name, 'entity must have name');
    assert.ok(['Culture', 'Academics', 'Events', 'Placements', 'Administration'].includes(entity.category));
  }

  for (const story of content.sampleStories) {
    assert.ok(story.id, 'story must have id');
    assert.ok(story.role, 'story must have role');
    assert.ok(story.story.length > 10, 'story text must be non-trivial');
    assert.ok(Array.isArray(story.tags), 'story tags must be an array');
  }
});
