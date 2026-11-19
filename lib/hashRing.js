export class HashRing {
  constructor() {
    this.ring = [];
  }

  addNode(node) {
    this.ring.push(node);
    this.ring.sort();
  }

  getNode(key) {
    if (this.ring.length === 0) return null;
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.ring.length;
    }
    return this.ring[hash];
  }
}
