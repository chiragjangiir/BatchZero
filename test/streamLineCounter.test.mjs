import test from 'node:test';
import assert from 'node:assert/strict';
import { countStreamLines } from '../lib/streamLineCounter.js';

test('countStreamLines counts newline bytes accurately', async () => {
  async function* gen() {
    yield 'line 1\nline 2\n';
    yield 'line 3\n';
  }
  const lines = await countStreamLines(gen());
  assert.equal(lines, 3);
});
