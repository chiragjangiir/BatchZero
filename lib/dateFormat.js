export function formatRelativeTime(date, now = new Date()) {
  const elapsedSec = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (elapsedSec < 60) return 'just now';
  const minutes = Math.floor(elapsedSec / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
