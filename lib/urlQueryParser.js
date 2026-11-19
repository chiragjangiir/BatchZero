export function parseUrlQuery(queryString) {
  if (!queryString || typeof queryString !== 'string') return {};
  const clean = queryString.startsWith('?') ? queryString.slice(1) : queryString;
  const result = {};
  for (const pair of clean.split('&')) {
    if (!pair) continue;
    const [k, v] = pair.split('=');
    const key = decodeURIComponent(k || '');
    const val = decodeURIComponent(v || '');
    if (key in result) {
      if (Array.isArray(result[key])) {
        result[key].push(val);
      } else {
        result[key] = [result[key], val];
      }
    } else {
      result[key] = val;
    }
  }
  return result;
}
