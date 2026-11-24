export function isHexString(str, expectedLength = null) {
  if (typeof str !== 'string') return false;
  const clean = str.trim();
  if (expectedLength != null && clean.length !== expectedLength) return false;
  return /^[0-9a-fA-F]+$/.test(clean);
}
