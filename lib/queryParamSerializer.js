export function serializeQueryParams(params) {
  if (!params || typeof params !== 'object') return '';
  const keys = Object.keys(params).sort();
  const pairs = [];
  for (const k of keys) {
    const val = params[k];
    if (val !== undefined && val !== null) {
      pairs.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(val))}`);
    }
  }
  return pairs.length > 0 ? `?${pairs.join('&')}` : '';
}
