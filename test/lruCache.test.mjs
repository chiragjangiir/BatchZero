import test from 'node:test';
import assert from 'node:assert/strict';
import { LruCache } from '../lib/lruCache.js';

test('LruCache evicts least recently used items upon capacity', () => {
  const cache = new LruCache(2);
  cache.set('a', 1);
  cache.set('b', 2);
  assert.equal(cache.get('a'), 1);
  cache.set('c', 3);
  assert.equal(cache.get('b'), undefined);
  assert.equal(cache.get('a'), 1);
  assert.equal(cache.get('c'), 3);
});
