import { test } from 'node:test';
import assert from 'node:assert';
import { getSentimentBadgeClass } from '../lib/sentimentColor.js';

test('getSentimentBadgeClass maps positive states to emerald', () => {
  assert.ok(getSentimentBadgeClass('Positive').includes('emerald'));
  assert.ok(getSentimentBadgeClass('Excited').includes('emerald'));
});

test('getSentimentBadgeClass maps negative states to rose', () => {
  assert.ok(getSentimentBadgeClass('Negative').includes('rose'));
  assert.ok(getSentimentBadgeClass('Frustrated').includes('rose'));
});

test('getSentimentBadgeClass defaults to neutral zinc', () => {
  assert.ok(getSentimentBadgeClass('Neutral').includes('zinc'));
  assert.ok(getSentimentBadgeClass('Unknown').includes('zinc'));
});
