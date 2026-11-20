import test from 'node:test';
import assert from 'node:assert/strict';
import { EventFilterPipeline } from '../lib/eventFilterPipeline.js';

test('EventFilterPipeline filters events against all predicates', () => {
  const pipeline = new EventFilterPipeline()
    .addFilter(e => e.type === 'click')
    .addFilter(e => e.userId > 0);

  assert.equal(pipeline.test({ type: 'click', userId: 42 }), true);
  assert.equal(pipeline.test({ type: 'hover', userId: 42 }), false);
});
