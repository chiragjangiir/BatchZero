import test from 'node:test';
import assert from 'node:assert/strict';
import { SimpleBloomFilter } from '../lib/bloomFilterSimple.js';

test('SimpleBloomFilter correctly flags added items', () => {
  const filter = new SimpleBloomFilter(128);
  filter.add('key-1');
  assert.equal(filter.has('key-1'), true);
  assert.equal(filter.has('non-existent-key'), false);
});
