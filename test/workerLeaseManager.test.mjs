import test from 'node:test';
import assert from 'node:assert/strict';
import { WorkerLeaseManager } from '../lib/workerLeaseManager.js';

test('WorkerLeaseManager handles acquisition and expiration', () => {
  const manager = new WorkerLeaseManager(1000);
  assert.equal(manager.acquire('w1', 100), true);
  assert.equal(manager.isExpired('w1', 500), false);
  assert.equal(manager.isExpired('w1', 1200), true);
});
