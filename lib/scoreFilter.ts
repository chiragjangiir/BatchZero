export function filterByScoreRange(scores: number[], min: number, max: number): number[] {
  return scores.filter((s) => s >= min && s <= max);
}
