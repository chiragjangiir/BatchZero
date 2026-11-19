export class DagScheduler {
  constructor() {
    this.graph = new Map();
  }

  addNode(node, dependencies = []) {
    this.graph.set(node, new Set(dependencies));
  }

  getExecutionOrder() {
    const order = [];
    const visited = new Set();
    const visiting = new Set();

    const dfs = (node) => {
      visiting.add(node);
      const deps = this.graph.get(node) || new Set();
      for (const dep of deps) {
        if (visiting.has(dep)) {
          throw new Error(`Cycle detected involving node ${dep}`);
        }
        if (!visited.has(dep)) {
          dfs(dep);
        }
      }
      visiting.delete(node);
      visited.add(node);
      order.push(node);
    };

    for (const node of this.graph.keys()) {
      if (!visited.has(node)) {
        dfs(node);
      }
    }
    return order;
  }
}
