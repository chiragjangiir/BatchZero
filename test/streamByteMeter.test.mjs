import test from 'node:test';
import assert from 'node:assert/strict';
import { StreamByteMeter } from '../lib/streamByteMeter.js';

test('StreamByteMeter tallies stream chunks accurately', () => {
  const meter = new StreamByteMeter();
  meter.record('hello');
  meter.record(Buffer.from(' world'));
  assert.equal(meter.count, 11);
});
