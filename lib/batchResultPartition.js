export function partitionSettled(settledResults = []) {
  const successes = [];
  const errors = [];
  for (const r of settledResults) {
    if (r.status === 'fulfilled') {
      successes.push(r.value);
    } else {
      errors.push(r.reason);
    }
  }
  return { successes, errors };
}
