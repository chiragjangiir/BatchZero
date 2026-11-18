export class StreamBuffer {
  constructor(highWaterMark = 16384) {
    this.highWaterMark = highWaterMark;
    this.buffer = [];
    this.currentLength = 0;
  }

  write(chunk) {
    const len = chunk.length || 0;
    this.buffer.push(chunk);
    this.currentLength += len;
    return this.currentLength < this.highWaterMark;
  }

  flush() {
    const chunks = this.buffer;
    this.buffer = [];
    this.currentLength = 0;
    return chunks;
  }
}
