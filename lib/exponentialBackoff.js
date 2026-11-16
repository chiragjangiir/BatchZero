export function calculateBackoff(attempt, baseDelay = 100, maxDelay = 10000, factor = 2) {
  if (attempt <= 0) return 0;
  const backoff = baseDelay * Math.pow(factor, attempt - 1);
  return Math.min(backoff, maxDelay);
}
