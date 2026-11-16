export function deduplicate(array, keyFn = (x) => x) {
  if (!Array.isArray(array)) return [];
  const seen = new Set();
  const result = [];
  for (const item of array) {
    const key = keyFn(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}
