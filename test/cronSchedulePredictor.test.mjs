import test from 'node:test';
import assert from 'node:assert/strict';
import { parseIntervalSeconds } from '../lib/cronSchedulePredictor.js';

test('parseIntervalSeconds parses standard cron cadence', () => {
  assert.equal(parseIntervalSeconds('*/5 * * * *'), 300);
  assert.equal(parseIntervalSeconds('0 * * * *'), 3600);
});
