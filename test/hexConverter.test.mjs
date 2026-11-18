import test from 'node:test';
import assert from 'node:assert/strict';
import { bufferToHex, hexToBuffer } from '../lib/hexConverter.js';

test('hexConverter encodes and decodes accurately', () => {
  const orig = 'hello world';
  const hex = bufferToHex(orig);
  assert.equal(hex, '68656c6c6f20776f726c64');
  const recovered = hexToBuffer(hex).toString('utf8');
  assert.equal(recovered, orig);
});
