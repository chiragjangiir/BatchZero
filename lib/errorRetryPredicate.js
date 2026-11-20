export function shouldRetryError(statusCode) {
  const code = Number(statusCode);
  return code === 408 || code === 429 || code === 500 || code === 502 || code === 503 || code === 504;
}
