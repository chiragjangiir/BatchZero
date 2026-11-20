export function* chunkIterator(array, chunkSize = 100) {
  if (!Array.isArray(array) || chunkSize <= 0) return;
  for (let i = 0; i < array.length; i += chunkSize) {
    yield array.slice(i, i + chunkSize);
  }
}
