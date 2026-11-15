export function normalizeTag(tag) {
  if (!tag) return '';
  return tag.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
}
