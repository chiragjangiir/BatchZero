export class TopicEventBus {
  constructor() {
    this.handlers = new Map();
  }

  subscribe(topic, fn) {
    if (!this.handlers.has(topic)) this.handlers.set(topic, []);
    this.handlers.get(topic).push(fn);
  }

  publish(topic, data) {
    const fns = this.handlers.get(topic) || [];
    for (const fn of fns) fn(data);
  }
}
