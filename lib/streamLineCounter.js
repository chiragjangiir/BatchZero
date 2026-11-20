export async function countStreamLines(asyncIterable) {
  let count = 0;
  for await (const chunk of asyncIterable) {
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] === '\n' || chunk[i] === 10) count++;
    }
  }
  return count;
}
