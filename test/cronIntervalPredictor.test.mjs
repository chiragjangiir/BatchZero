import test from 'node:test';
import assert from 'node:assert/strict';
import { parseEveryMinutes } from '../lib/cronIntervalPredictor.js';

test('parseEveryMinutes parses cron minute intervals', () => {
  assert.equal(parseEveryMinutes('*/15 * * * *'), 15);
  assert.equal(parseEveryMinutes('0 * * * *'), null);
});
