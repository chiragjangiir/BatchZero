export function sortObjectKeys(obj) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return obj;
  const sorted = {};
  for (const k of Object.keys(obj).sort()) {
    sorted[k] = sortObjectKeys(obj[k]);
  }
  return sorted;
}
