export function calculateExponentialJitter(attempt, baseMs = 50, capMs = 2000) {
  const temp = Math.min(capMs, baseMs * Math.pow(2, attempt));
  return Math.floor(Math.random() * temp);
}
