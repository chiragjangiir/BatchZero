export class StreamLineSplitter {
  constructor() {
    this.remainder = '';
  }

  feed(chunk) {
    const text = this.remainder + chunk;
    const lines = text.split('\n');
    this.remainder = lines.pop() || '';
    return lines;
  }

  finish() {
    const last = this.remainder;
    this.remainder = '';
    return last ? [last] : [];
  }
}
