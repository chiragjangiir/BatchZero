export function partitionBatch(items, partitionSize) {
  if (!Array.isArray(items) || partitionSize <= 0) return [];
  const partitions = [];
  for (let i = 0; i < items.length; i += partitionSize) {
    partitions.push(items.slice(i, i + partitionSize));
  }
  return partitions;
}
