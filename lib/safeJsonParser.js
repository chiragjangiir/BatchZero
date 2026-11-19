export function safeJsonParse(jsonString, fallbackValue = null) {
  if (typeof jsonString !== 'string') return fallbackValue;
  try {
    return JSON.parse(jsonString);
  } catch {
    return fallbackValue;
  }
}
