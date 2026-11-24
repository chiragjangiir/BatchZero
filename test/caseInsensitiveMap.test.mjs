import test from 'node:test';
import assert from 'node:assert/strict';
import { CaseInsensitiveMap } from '../lib/caseInsensitiveMap.js';

test('CaseInsensitiveMap treats differing key casings identically', () => {
  const m = new CaseInsensitiveMap();
  m.set('Content-Type', 'text/html');
  assert.equal(m.get('content-type'), 'text/html');
  assert.equal(m.get('CONTENT-TYPE'), 'text/html');
  assert.equal(m.has('content-TYPE'), true);
});
