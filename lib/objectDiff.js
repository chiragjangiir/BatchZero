export function diffObjects(objA = {}, objB = {}) {
  const added = {};
  const modified = {};
  const removed = {};

  const allKeys = new Set([...Object.keys(objA), ...Object.keys(objB)]);
  for (const key of allKeys) {
    if (!(key in objA)) {
      added[key] = objB[key];
    } else if (!(key in objB)) {
      removed[key] = objA[key];
    } else if (objA[key] !== objB[key]) {
      modified[key] = { from: objA[key], to: objB[key] };
    }
  }
  return { added, modified, removed };
}
