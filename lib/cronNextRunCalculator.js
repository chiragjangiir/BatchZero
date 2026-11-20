export function computeNextRunOffset(intervalSeconds, lastRunEpochSec, nowEpochSec) {
  if (intervalSeconds <= 0) return 0;
  const elapsed = Math.max(0, nowEpochSec - lastRunEpochSec);
  if (elapsed >= intervalSeconds) return 0;
  return intervalSeconds - elapsed;
}
