import test from 'node:test';
import assert from 'node:assert/strict';
import { AsyncEventEmitter } from '../lib/eventEmitterAsync.js';

test('AsyncEventEmitter awaits all asynchronous listeners', async () => {
  const emitter = new AsyncEventEmitter();
  const order = [];
  emitter.on('data', async (val) => {
    order.push(val);
  });
  await emitter.emit('data', 42);
  assert.deepEqual(order, [42]);
});
