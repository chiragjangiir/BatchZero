export function toHex(uint8Array) {
  if (!uint8Array) return '';
  return Array.from(uint8Array, b => b.toString(16).padStart(2, '0')).join('');
}
