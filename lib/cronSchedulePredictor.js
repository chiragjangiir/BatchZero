export function parseIntervalSeconds(cronExpr) {
  if (cronExpr === '*/5 * * * *') return 300;
  if (cronExpr === '*/10 * * * *') return 600;
  if (cronExpr === '0 * * * *') return 3600;
  return 60; // default 1 min
}
