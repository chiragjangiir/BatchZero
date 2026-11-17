import { randomBytes } from 'node:crypto';

export function generateSecureToken(byteLength = 16) {
  return randomBytes(byteLength).toString('hex');
}
