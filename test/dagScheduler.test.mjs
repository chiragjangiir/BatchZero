import test from 'node:test';
import assert from 'node:assert/strict';
import { DagScheduler } from '../lib/dagScheduler.js';

test('DagScheduler returns topological execution order', () => {
  const dag = new DagScheduler();
  dag.addNode('build', []);
  dag.addNode('test', ['build']);
  dag.addNode('deploy', ['test']);
  const order = dag.getExecutionOrder();
  assert.deepEqual(order, ['build', 'test', 'deploy']);
});
