export function immutableSplice(array, start, deleteCount, ...items) {
  if (!Array.isArray(array)) return [...items];
  const copy = [...array];
  copy.splice(start, deleteCount, ...items);
  return copy;
}
