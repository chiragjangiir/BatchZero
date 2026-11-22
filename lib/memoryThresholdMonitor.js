export function isMemoryAboveThreshold(usedBytes, totalBytes, thresholdRatio = 0.85) {
  if (totalBytes <= 0) return false;
  return (usedBytes / totalBytes) >= thresholdRatio;
}
