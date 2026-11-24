import test from 'node:test';
import assert from 'node:assert/strict';
import { HistogramBucketMeter } from '../lib/histogramBucketMeter.js';

test('HistogramBucketMeter groups metric observations into buckets', () => {
  const h = new HistogramBucketMeter([10, 50]);
  h.record(5);
  h.record(25);
  h.record(100);
  assert.deepEqual(h.getSnapshot(), [1, 1, 1]);
});
