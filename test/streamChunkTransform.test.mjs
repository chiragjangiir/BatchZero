import test from 'node:test';
import assert from 'node:assert/strict';
import { StreamChunkTransform } from '../lib/streamChunkTransform.js';

test('StreamChunkTransform splits lines across chunk boundaries', () => {
  const splitter = new StreamChunkTransform('\n');
  const l1 = splitter.push('hello\nwor');
  assert.deepEqual(l1, ['hello']);
  const l2 = splitter.push('ld\nend');
  assert.deepEqual(l2, ['world']);
  const l3 = splitter.flush();
  assert.deepEqual(l3, ['end']);
});
