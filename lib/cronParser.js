export function isValidCron(expression) {
  if (typeof expression !== 'string') return false;
  const parts = expression.trim().split(/\s+/);
  return parts.length === 5;
}
