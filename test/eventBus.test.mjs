import test from 'node:test';
import assert from 'node:assert/strict';
import { TopicEventBus } from '../lib/eventBus.js';

test('TopicEventBus delivers payloads to topic subscribers', () => {
  const bus = new TopicEventBus();
  let received = null;
  bus.subscribe('user.created', d => { received = d; });
  bus.publish('user.created', { id: 101 });
  assert.deepEqual(received, { id: 101 });
});
