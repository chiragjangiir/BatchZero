import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidCron } from '../lib/cronParser.js';

test('isValidCron validates 5-token standard cron syntax', () => {
  assert.equal(isValidCron('*/5 * * * *'), true);
  assert.equal(isValidCron('0 0 1 1 *'), true);
  assert.equal(isValidCron('invalid'), false);
});
