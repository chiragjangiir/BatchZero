import test from 'node:test';
import assert from 'node:assert/strict';
import { maskSecret } from '../lib/stringMasker.js';

test('maskSecret preserves prefix/suffix and obscures secret core', () => {
  assert.equal(maskSecret('AKIAIOSFODNN7EXAMPLE'), 'AKIA************MPLE');
  assert.equal(maskSecret('short', 4, 4), '*****');
});
