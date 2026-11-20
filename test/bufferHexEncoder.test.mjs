import test from 'node:test';
import assert from 'node:assert/strict';
import { toHex } from '../lib/bufferHexEncoder.js';

test('toHex converts byte arrays to hex string', () => {
  const bytes = new Uint8Array([0, 15, 255]);
  assert.equal(toHex(bytes), '000fff');
});
