export function sanitizeSearchQuery(query) {
  if (typeof query !== 'string') return '';
  return query
    .replace(/[\\$><{}]/g, '')
    .trim()
    .replace(/\s+/g, ' ');
}
