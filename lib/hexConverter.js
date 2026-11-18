export function bufferToHex(buffer) {
  if (!buffer) return '';
  return Buffer.from(buffer).toString('hex');
}

export function hexToBuffer(hexStr) {
  if (typeof hexStr !== 'string') return Buffer.alloc(0);
  return Buffer.from(hexStr.replace(/^0x/, ''), 'hex');
}
