import { chunkArray } from '../lib/batchChunker.js';

const largeList = Array.from({ length: 100000 }, (_, i) => i);
console.time('chunkArray 100k items');
const chunks = chunkArray(largeList, 500);
console.timeEnd('chunkArray 100k items');
console.log(`Created ${chunks.length} chunks successfully.`);
