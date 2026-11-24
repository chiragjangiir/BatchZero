export class TaskBatchScheduler {
  constructor(batchSize = 10, flushCallback) {
    this.batchSize = batchSize;
    this.flushCallback = flushCallback;
    this.queue = [];
  }

  push(item) {
    this.queue.push(item);
    if (this.queue.length >= this.batchSize) {
      this.flush();
    }
  }

  flush() {
    if (this.queue.length === 0) return;
    const batch = this.queue.slice();
    this.queue = [];
    if (typeof this.flushCallback === 'function') {
      this.flushCallback(batch);
    }
    return batch;
  }

  get pending() {
    return this.queue.length;
  }
}
