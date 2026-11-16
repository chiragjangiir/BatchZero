export class PriorityQueue {
  constructor(comparator = (a, b) => a - b) {
    this.data = [];
    this.comparator = comparator;
  }

  push(item) {
    this.data.push(item);
    this.data.sort(this.comparator);
  }

  pop() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }
}
