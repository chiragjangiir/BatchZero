import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCsvLine } from '../lib/csvParser.js';

test('parseCsvLine parses quoted values and commas', () => {
  const line = 'Alice,"Engineer, Lead",30';
  const fields = parseCsvLine(line);
  assert.deepEqual(fields, ['Alice', 'Engineer, Lead', '30']);
});
