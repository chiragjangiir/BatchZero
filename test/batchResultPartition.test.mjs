import test from 'node:test';
import assert from 'node:assert/strict';
import { partitionSettled } from '../lib/batchResultPartition.js';

test('partitionSettled divides fulfilled and rejected promise results', () => {
  const results = [
    { status: 'fulfilled', value: 'OK' },
    { status: 'rejected', reason: new Error('FAIL') }
  ];
  const { successes, errors } = partitionSettled(results);
  assert.equal(successes.length, 1);
  assert.equal(errors.length, 1);
});
