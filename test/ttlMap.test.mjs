import test from 'node:test';
import assert from 'node:assert/strict';
import { TtlMap } from '../lib/ttlMap.js';

test('TtlMap stores and expires keys', async () => {
  const map = new TtlMap(20);
  map.set('a', 100);
  assert.equal(map.get('a'), 100);
  await new Promise(r => setTimeout(r, 30));
  assert.equal(map.get('a'), undefined);
  assert.equal(map.has('a'), false);
});
