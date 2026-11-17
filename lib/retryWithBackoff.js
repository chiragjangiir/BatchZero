export async function retryWithBackoff(fn, maxAttempts = 3, baseDelay = 10) {
  let attempt = 0;
  while (attempt < maxAttempts) {
    try {
      return await fn();
    } catch (err) {
      attempt++;
      if (attempt >= maxAttempts) throw err;
      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}
