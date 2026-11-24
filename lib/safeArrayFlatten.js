export function safeFlatten(arr, depth = 1) {
  if (!Array.isArray(arr)) return [];
  return arr.flat(Math.max(0, depth));
}
