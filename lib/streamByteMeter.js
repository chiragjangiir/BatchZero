export class StreamByteMeter {
  constructor() {
    this.totalBytes = 0;
  }

  record(chunk) {
    if (chunk == null) return;
    if (typeof chunk === 'string') {
      this.totalBytes += Buffer.byteLength(chunk, 'utf8');
    } else if (Buffer.isBuffer(chunk) || chunk instanceof Uint8Array) {
      this.totalBytes += chunk.byteLength || chunk.length;
    }
  }

  get count() {
    return this.totalBytes;
  }
}
