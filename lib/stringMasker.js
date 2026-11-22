export function maskSecret(secret, visiblePrefix = 4, visibleSuffix = 4) {
  if (!secret || typeof secret !== 'string') return '';
  if (secret.length <= visiblePrefix + visibleSuffix) {
    return '*'.repeat(secret.length);
  }
  const prefix = secret.slice(0, visiblePrefix);
  const suffix = secret.slice(-visibleSuffix);
  const maskedLength = secret.length - visiblePrefix - visibleSuffix;
  return `${prefix}${'*'.repeat(maskedLength)}${suffix}`;
}
