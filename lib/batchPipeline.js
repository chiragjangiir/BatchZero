export class BatchPipeline {
  constructor() {
    this.stages = [];
  }

  addStage(name, transformFn) {
    this.stages.push({ name, fn: transformFn });
    return this;
  }

  async process(items) {
    let current = Array.isArray(items) ? [...items] : [];
    for (const stage of this.stages) {
      const next = [];
      for (const item of current) {
        next.push(await stage.fn(item));
      }
      current = next;
    }
    return current;
  }
}
