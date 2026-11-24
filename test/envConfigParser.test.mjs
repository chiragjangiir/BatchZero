import test from 'node:test';
import assert from 'node:assert/strict';
import { parseEnvInt, parseEnvBool } from '../lib/envConfigParser.js';

test('envConfigParser parses integers and booleans safely', () => {
  assert.equal(parseEnvInt('42', 10), 42);
  assert.equal(parseEnvInt('invalid', 10), 10);
  assert.equal(parseEnvBool('true', false), true);
  assert.equal(parseEnvBool('0', true), false);
});
