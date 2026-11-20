import test from 'node:test';
import assert from 'node:assert/strict';
import { WorkerHeartbeatMonitor } from '../lib/workerHeartbeatMonitor.js';

test('WorkerHeartbeatMonitor identifies dead workers', () => {
  const monitor = new WorkerHeartbeatMonitor(50);
  monitor.ping('w1', 1000);
  assert.equal(monitor.isDead('w1', 1030), false);
  assert.equal(monitor.isDead('w1', 1060), true);
});
