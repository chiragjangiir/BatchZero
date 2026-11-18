export function partitionArray(arr, predicate) {
  if (!Array.isArray(arr) || typeof predicate !== 'function') {
    return [[], []];
  }
  const passed = [];
  const failed = [];
  for (const item of arr) {
    if (predicate(item)) {
      passed.push(item);
    } else {
      failed.push(item);
    }
  }
  return [passed, failed];
}
