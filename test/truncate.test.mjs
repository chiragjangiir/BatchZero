import { test } from 'node:test';
import assert from 'node:assert';
import { truncateText } from '../lib/truncate.js';

test('truncateText truncates string and adds ellipsis', () => {
  assert.strictEqual(truncateText('Hello World', 5), 'Hello...');
  assert.strictEqual(truncateText('Short', 10), 'Short');
});
