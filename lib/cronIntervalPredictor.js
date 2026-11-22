export function parseEveryMinutes(cronExpression) {
  if (!cronExpression || typeof cronExpression !== 'string') return null;
  const parts = cronExpression.trim().split(/\s+/);
  if (parts.length < 5) return null;
  const minutePart = parts[0];
  if (minutePart.startsWith('*/')) {
    const interval = parseInt(minutePart.slice(2), 10);
    return isNaN(interval) ? null : interval;
  }
  return null;
}
