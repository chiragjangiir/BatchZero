import test from 'node:test';
import assert from 'node:assert/strict';
import { SimpleBloomFilter } from '../lib/bloomFilter.js';

test('SimpleBloomFilter detects set membership', () => {
  const filter = new SimpleBloomFilter(256);
  filter.add('user_123');
  assert.equal(filter.has('user_123'), true);
  assert.equal(filter.has('user_999'), false);
});
