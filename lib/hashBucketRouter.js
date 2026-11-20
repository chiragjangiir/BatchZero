export function routeToBucket(key, totalBuckets) {
  if (!key || totalBuckets <= 0) return 0;
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return hash % totalBuckets;
}
