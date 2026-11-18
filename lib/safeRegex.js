export function escapeRegexString(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function createSafePattern(rawLiteral, flags = 'i') {
  return new RegExp(escapeRegexString(rawLiteral), flags);
}
