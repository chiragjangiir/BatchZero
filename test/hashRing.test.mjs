import test from 'node:test';
import assert from 'node:assert/strict';
import { HashRing } from '../lib/hashRing.js';

test('HashRing consistently maps keys to nodes', () => {
  const ring = new HashRing();
  ring.addNode('node-A');
  ring.addNode('node-B');
  assert.equal(ring.getNode('user-1'), ring.getNode('user-1'));
});
