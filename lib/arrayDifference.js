export function arrayDifference(arrA, arrB) {
  if (!Array.isArray(arrA)) return [];
  if (!Array.isArray(arrB)) return [...arrA];
  const setB = new Set(arrB);
  return arrA.filter(x => !setB.has(x));
}
