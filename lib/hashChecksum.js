import { createHash } from 'node:crypto';

export function computeSha256(data) {
  if (data === null || data === undefined) return '';
  return createHash('sha256').update(data).digest('hex');
}

export function computeMd5(data) {
  if (data === null || data === undefined) return '';
  return createHash('md5').update(data).digest('hex');
}
