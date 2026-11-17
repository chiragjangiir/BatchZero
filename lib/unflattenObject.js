export function unflattenObject(flat) {
  const result = {};
  for (const [path, val] of Object.entries(flat)) {
    const parts = path.split('.');
    let curr = result;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!curr[parts[i]]) curr[parts[i]] = {};
      curr = curr[parts[i]];
    }
    curr[parts[parts.length - 1]] = val;
  }
  return result;
}
