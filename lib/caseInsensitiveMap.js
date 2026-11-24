export class CaseInsensitiveMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    if (key == null) return;
    this.map.set(String(key).toLowerCase(), value);
  }

  get(key) {
    if (key == null) return undefined;
    return this.map.get(String(key).toLowerCase());
  }

  has(key) {
    if (key == null) return false;
    return this.map.has(String(key).toLowerCase());
  }

  delete(key) {
    if (key == null) return false;
    return this.map.delete(String(key).toLowerCase());
  }

  get size() {
    return this.map.size;
  }
}
