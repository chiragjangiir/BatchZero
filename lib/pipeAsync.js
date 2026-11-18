export function pipeAsync(...fns) {
  return async function(initialValue) {
    let current = initialValue;
    for (const fn of fns) {
      if (typeof fn === 'function') {
        current = await fn(current);
      }
    }
    return current;
  };
}
