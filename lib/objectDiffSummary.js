export function diffObjects(objA = {}, objB = {}) {
  const added = [];
  const modified = [];
  const removed = [];

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  for (const k of keysB) {
    if (!(k in objA)) {
      added.push(k);
    } else if (objA[k] !== objB[k]) {
      modified.push(k);
    }
  }

  for (const k of keysA) {
    if (!(k in objB)) {
      removed.push(k);
    }
  }

  return { added, modified, removed };
}
