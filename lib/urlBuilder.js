export function buildQueryString(params = {}) {
  const entries = [];
  for (const [key, val] of Object.entries(params)) {
    if (val === null || val === undefined) continue;
    if (Array.isArray(val)) {
      for (const item of val) {
        entries.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`);
      }
    } else {
      entries.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
    }
  }
  return entries.length > 0 ? `?${entries.join('&')}` : '';
}
