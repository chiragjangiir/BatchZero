import test from 'node:test';
import assert from 'node:assert/strict';
import { parseUrlQuery } from '../lib/urlQueryParser.js';

test('parseUrlQuery parses key-value parameters and arrays', () => {
  const parsed = parseUrlQuery('?name=Chirag&tag=a&tag=b');
  assert.deepEqual(parsed, { name: 'Chirag', tag: ['a', 'b'] });
});
