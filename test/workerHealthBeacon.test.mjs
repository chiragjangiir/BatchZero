import test from 'node:test';
import assert from 'node:assert/strict';
import { WorkerHealthBeacon } from '../lib/workerHealthBeacon.js';

test('WorkerHealthBeacon tracks uptime and staleness', () => {
  const beacon = new WorkerHealthBeacon('w-1');
  assert.equal(beacon.isStale(1000), false);
  assert.equal(beacon.isStale(100, Date.now() + 500), true);
});
