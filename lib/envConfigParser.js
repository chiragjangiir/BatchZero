export function parseEnvInt(val, defaultValue) {
  if (val == null) return defaultValue;
  const parsed = parseInt(String(val).trim(), 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

export function parseEnvBool(val, defaultValue = false) {
  if (val == null) return defaultValue;
  const clean = String(val).trim().toLowerCase();
  if (clean === 'true' || clean === '1' || clean === 'yes') return true;
  if (clean === 'false' || clean === '0' || clean === 'no') return false;
  return defaultValue;
}
