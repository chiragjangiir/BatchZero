import test from 'node:test';
import assert from 'node:assert/strict';
import { JobHeartbeatTracker } from '../lib/jobHeartbeatTracker.js';

test('JobHeartbeatTracker detects dead worker heartbeats', () => {
  const tracker = new JobHeartbeatTracker(100);
  tracker.recordHeartbeat('job-1', 1000);
  assert.equal(tracker.isStalled('job-1', 1050), false);
  assert.equal(tracker.isStalled('job-1', 1150), true);
});
