export class EventFilterPipeline {
  constructor() {
    this.predicates = [];
  }

  addFilter(predicate) {
    this.predicates.push(predicate);
    return this;
  }

  test(event) {
    return this.predicates.every(p => Boolean(p(event)));
  }
}
