export function calculateShannonEntropy(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return 0.0;
  }
  const freqs = new Map();
  for (const ch of str) {
    freqs.set(ch, (freqs.get(ch) || 0) + 1);
  }
  const len = str.length;
  let entropy = 0.0;
  for (const count of freqs.values()) {
    const p = count / len;
    entropy -= p * Math.log2(p);
  }
  return entropy;
}
