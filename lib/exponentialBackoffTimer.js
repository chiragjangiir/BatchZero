export function computeBackoffDelay(attempt, baseDelayMs = 100, maxDelayMs = 30000, factor = 2) {
  if (attempt <= 0) return baseDelayMs;
  const delay = baseDelayMs * Math.pow(factor, attempt);
  return Math.min(delay, maxDelayMs);
}
