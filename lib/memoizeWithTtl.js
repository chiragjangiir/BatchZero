export function memoizeWithTtl(fn, ttlMs = 1000) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    const now = Date.now();
    const hit = cache.get(key);
    if (hit && now < hit.expiresAt) {
      return hit.value;
    }
    const val = fn(...args);
    cache.set(key, { value: val, expiresAt: now + ttlMs });
    return val;
  };
}
