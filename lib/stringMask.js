export function maskString(str, visibleStart = 2, visibleEnd = 2, maskChar = '*') {
  if (!str || typeof str !== 'string') return '';
  if (str.length <= visibleStart + visibleEnd) return maskChar.repeat(str.length);
  const start = str.slice(0, visibleStart);
  const end = str.slice(-visibleEnd);
  const masked = maskChar.repeat(str.length - visibleStart - visibleEnd);
  return `${start}${masked}${end}`;
}
