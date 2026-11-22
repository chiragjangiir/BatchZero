export function deterministicQueryString(params) {
  if (!params || typeof params !== 'object') return '';
  const keys = Object.keys(params).sort();
  return keys
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k] == null ? '' : params[k])}`)
    .join('&');
}
