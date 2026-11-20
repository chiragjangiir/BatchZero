export function maskSecret(secret, visibleChars = 4) {
  if (!secret || typeof secret !== 'string') return '';
  if (secret.length <= visibleChars) return '*'.repeat(secret.length);
  const visible = secret.slice(-visibleChars);
  return '*'.repeat(secret.length - visibleChars) + visible;
}
