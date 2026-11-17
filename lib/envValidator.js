export function validateEnv(requiredKeys, env = process.env) {
  const missing = [];
  for (const k of requiredKeys) {
    if (!env[k] || env[k].trim() === '') {
      missing.push(k);
    }
  }
  return { valid: missing.length === 0, missing };
}
