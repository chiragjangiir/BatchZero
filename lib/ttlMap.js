export class TtlMap {
  constructor(defaultTtlMs = 60000) {
    this.defaultTtl = defaultTtlMs;
    this.store = new Map();
  }

  set(key, value, ttlMs = this.defaultTtl) {
    const expiresAt = Date.now() + ttlMs;
    this.store.set(key, { value, expiresAt });
  }

  get(key) {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  delete(key) {
    return this.store.delete(key);
  }
}
