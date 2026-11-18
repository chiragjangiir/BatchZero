export function computeBackoffJitter(attempt, baseDelayMs = 100, maxDelayMs = 5000) {
  const safeAttempt = Math.max(0, attempt);
  const exponentialDelay = Math.min(maxDelayMs, baseDelayMs * Math.pow(2, safeAttempt));
  // Full jitter: uniformly random between 0 and exponentialDelay
  return Math.floor(Math.random() * exponentialDelay);
}
