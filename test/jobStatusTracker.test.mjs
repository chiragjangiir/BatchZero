import test from 'node:test';
import assert from 'node:assert/strict';
import { JobStatusTracker } from '../lib/jobStatusTracker.js';

test('JobStatusTracker validates allowed transitions', () => {
  assert.equal(JobStatusTracker.canTransition('PENDING', 'QUEUED'), true);
  assert.equal(JobStatusTracker.canTransition('QUEUED', 'RUNNING'), true);
  assert.equal(JobStatusTracker.canTransition('RUNNING', 'COMPLETED'), true);
  assert.equal(JobStatusTracker.canTransition('COMPLETED', 'RUNNING'), false);
  assert.equal(JobStatusTracker.canTransition('FAILED', 'QUEUED'), true);
});
