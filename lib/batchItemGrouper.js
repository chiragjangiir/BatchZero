export function chunkArray(items, chunkSize = 50) {
  if (!Array.isArray(items) || chunkSize <= 0) return [];
  const chunks = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  return chunks;
}
