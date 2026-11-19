export async function collectStream(asyncIterable) {
  const chunks = [];
  for await (const chunk of asyncIterable) {
    chunks.push(chunk);
  }
  return chunks.join('');
}
