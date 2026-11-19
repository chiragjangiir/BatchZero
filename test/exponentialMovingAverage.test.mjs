import test from 'node:test';
import assert from 'node:assert/strict';
import { ExponentialMovingAverage } from '../lib/exponentialMovingAverage.js';

test('ExponentialMovingAverage smooths series over time', () => {
  const ema = new ExponentialMovingAverage(0.5);
  ema.update(10);
  assert.equal(ema.value, 10);
  ema.update(20);
  assert.equal(ema.value, 15);
});
