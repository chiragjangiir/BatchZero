export async function reduceInBatches(items, batchSize, fn, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    acc = await fn(acc, batch);
  }
  return acc;
}
