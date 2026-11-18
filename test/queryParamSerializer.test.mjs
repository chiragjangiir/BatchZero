import test from 'node:test';
import assert from 'node:assert/strict';
import { serializeQueryParams } from '../lib/queryParamSerializer.js';

test('serializeQueryParams sorts keys deterministically', () => {
  const qs = serializeQueryParams({ z: 1, a: 'test', m: true });
  assert.equal(qs, '?a=test&m=true&z=1');
  assert.equal(serializeQueryParams({}), '');
  assert.equal(serializeQueryParams(null), '');
});
