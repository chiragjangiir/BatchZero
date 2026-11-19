export async function retryUntil(fn, predicate, maxAttempts = 5, delayMs = 10) {
  for (let i = 0; i < maxAttempts; i++) {
    const res = await fn();
    if (predicate(res)) return res;
    await new Promise(r => setTimeout(r, delayMs));
  }
  throw new Error(`Predicate not met after ${maxAttempts} attempts`);
}
