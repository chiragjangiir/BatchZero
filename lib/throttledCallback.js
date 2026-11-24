export function throttle(fn, intervalMs = 50) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= intervalMs) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}
