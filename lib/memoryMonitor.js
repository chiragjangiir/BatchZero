export function getMemoryStats() {
  const usage = process.memoryUsage();
  return {
    heapUsedMb: (usage.heapUsed / 1024 / 1024).toFixed(2),
    heapTotalMb: (usage.heapTotal / 1024 / 1024).toFixed(2),
    rssMb: (usage.rss / 1024 / 1024).toFixed(2)
  };
}
