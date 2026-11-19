export function isTransientError(error) {
  if (!error) return false;
  const msg = (error.message || '').toLowerCase();
  const transientKeywords = ['econnreset', 'etimedout', 'deadlock', 'too many requests', '429', '503'];
  return transientKeywords.some(kw => msg.includes(kw));
}
