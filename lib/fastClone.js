export function fastClone(val) {
  if (val === null || typeof val !== 'object') return val;
  if (typeof structuredClone === 'function') {
    return structuredClone(val);
  }
  return JSON.parse(JSON.stringify(val));
}
