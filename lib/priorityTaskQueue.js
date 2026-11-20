export class PriorityTaskQueue {
  constructor() {
    this.tasks = [];
  }

  enqueue(task, priority = 0) {
    this.tasks.push({ task, priority });
    this.tasks.sort((a, b) => b.priority - a.priority);
  }

  dequeue() {
    return this.tasks.shift()?.task;
  }

  get size() {
    return this.tasks.length;
  }
}
