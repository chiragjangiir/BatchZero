export function estimatePayloadBytes(obj) {
  if (obj === null || obj === undefined) return 0;
  return Buffer.byteLength(JSON.stringify(obj), 'utf8');
}
