export function sortedInsert(array, item, comparator = (a, b) => a - b) {
  let low = 0, high = array.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (comparator(array[mid], item) < 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  array.splice(low, 0, item);
  return array;
}
