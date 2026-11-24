import test from 'node:test';
import assert from 'node:assert/strict';
import { StreamLineSplitter } from '../lib/streamLineSplitter.js';

test('StreamLineSplitter splits streaming chunks across newlines', () => {
  const splitter = new StreamLineSplitter();
  assert.deepEqual(splitter.feed('foo\nbar'), ['foo']);
  assert.deepEqual(splitter.feed('\nbaz'), ['bar']);
  assert.deepEqual(splitter.finish(), ['baz']);
});
