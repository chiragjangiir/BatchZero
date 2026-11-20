export function buildQuery(params) {
  if (!params || typeof params !== 'object') return '';
  const search = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) {
      search.append(k, String(v));
    }
  }
  const s = search.toString();
  return s ? `?${s}` : '';
}
