export class AsyncEventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  on(event, handler) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(handler);
  }

  async emit(event, ...args) {
    const handlers = this.listeners.get(event) || [];
    for (const fn of handlers) {
      await fn(...args);
    }
  }
}
