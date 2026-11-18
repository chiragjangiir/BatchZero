export function extractJsonPath(obj, path, defaultValue = undefined) {
  if (obj == null || typeof path !== 'string' || path.length === 0) {
    return defaultValue;
  }
  const parts = path.split('.');
  let curr = obj;
  for (const part of parts) {
    if (curr == null || typeof curr !== 'object') {
      return defaultValue;
    }
    curr = curr[part];
  }
  return curr !== undefined ? curr : defaultValue;
}
