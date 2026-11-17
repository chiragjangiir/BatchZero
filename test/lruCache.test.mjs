import test from 'node:test';
import assert from 'node:assert/strict';
import { LruCache } from '../lib/lruCache.js';

test('LruCache evicts oldest key when at capacity', () => {
  const cache = new LruCache(2);
  cache.set('a', 1);
  cache.set('b', 2);
  assert.equal(cache.get('a'), 1);
  cache.set('c', 3); // evicts 'b'
  assert.equal(cache.get('b'), undefined);
  assert.equal(cache.get('c'), 3);
});
