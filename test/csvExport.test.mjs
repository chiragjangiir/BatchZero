import { test } from 'node:test';
import assert from 'node:assert';
import { generateCsv } from '../lib/csvExport.js';

test('generateCsv formats and escapes quotes', () => {
  const csv = generateCsv(['Name'], [['Alice "Lead"']]);
  assert.ok(csv.includes('""Lead""'));
});
