import { test } from 'node:test';
import assert from 'node:assert';
import { parseSearchQuery } from '../lib/search.js';

test('parseSearchQuery extracts plain keywords', () => {
  const parsed = parseSearchQuery('hackathon project alpha');
  assert.deepStrictEqual(parsed.keywords, ['hackathon', 'project', 'alpha']);
  assert.deepStrictEqual(parsed.exactPhrases, []);
  assert.deepStrictEqual(parsed.tags, []);
});

test('parseSearchQuery extracts quoted phrases', () => {
  const parsed = parseSearchQuery('"annual sports meet" basketball');
  assert.deepStrictEqual(parsed.exactPhrases, ['annual sports meet']);
  assert.deepStrictEqual(parsed.keywords, ['basketball']);
});

test('parseSearchQuery extracts tags and filters', () => {
  const parsed = parseSearchQuery('#tech #culture role:organizer "budget approved"');
  assert.deepStrictEqual(parsed.tags, ['tech', 'culture']);
  assert.deepStrictEqual(parsed.filters, { role: 'organizer' });
  assert.deepStrictEqual(parsed.exactPhrases, ['budget approved']);
});

test('parseSearchQuery handles empty and null input', () => {
  assert.deepStrictEqual(parseSearchQuery(''), {
    keywords: [],
    exactPhrases: [],
    tags: [],
    filters: {},
  });
});
