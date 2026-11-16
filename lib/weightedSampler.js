export function weightedSample(items, weights, rng = Math.random) {
  if (!items || items.length === 0) return null;
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  let threshold = rng() * totalWeight;
  for (let i = 0; i < items.length; i++) {
    threshold -= weights[i];
    if (threshold <= 0) {
      return items[i];
    }
  }
  return items[items.length - 1];
}
