export function debounce(fn, waitMs = 50) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn.apply(this, args);
    }, waitMs);
  };
}
