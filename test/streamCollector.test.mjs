import test from 'node:test';
import assert from 'node:assert/strict';
import { collectStream } from '../lib/streamCollector.js';

test('collectStream concatenates async iterable chunks', async () => {
  async function* gen() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
  const result = await collectStream(gen());
  assert.equal(result, 'abc');
});
