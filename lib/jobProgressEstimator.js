export function estimateProgress(completedItems, totalItems, elapsedMs) {
  if (totalItems <= 0) return { percent: 100, etaMs: 0 };
  const percent = Math.min(100, Math.round((completedItems / totalItems) * 100));
  if (completedItems <= 0 || elapsedMs <= 0) {
    return { percent, etaMs: null };
  }
  const msPerItem = elapsedMs / completedItems;
  const remainingItems = Math.max(0, totalItems - completedItems);
  const etaMs = Math.round(remainingItems * msPerItem);
  return { percent, etaMs };
}
