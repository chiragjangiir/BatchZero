export class StreamChunkTransform {
  constructor(delimiter = '\n') {
    this.delimiter = delimiter;
    this.remainder = '';
  }

  push(chunk) {
    const text = this.remainder + chunk;
    const parts = text.split(this.delimiter);
    this.remainder = parts.pop() || '';
    return parts;
  }

  flush() {
    const last = this.remainder;
    this.remainder = '';
    return last ? [last] : [];
  }
}
