import test from 'node:test';
import assert from 'node:assert/strict';
import { routeToBucket } from '../lib/hashBucketRouter.js';

test('routeToBucket deterministically hashes to bucket index', () => {
  const b1 = routeToBucket('user-100', 8);
  const b2 = routeToBucket('user-100', 8);
  assert.equal(b1, b2);
  assert.equal(b1 >= 0 && b1 < 8, true);
});
