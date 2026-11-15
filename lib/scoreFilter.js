export function filterByScoreRange(scores, min, max) {
  return scores.filter((s) => s >= min && s <= max);
}
