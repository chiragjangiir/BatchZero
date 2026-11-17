export class SimpleBloomFilter {
  constructor(size = 1024) {
    this.size = size;
    this.bits = new Uint8Array(size);
  }

  _hash1(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % this.size;
    }
    return Math.abs(hash);
  }

  _hash2(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash + str.charCodeAt(i)) % this.size;
    }
    return Math.abs(hash);
  }

  add(item) {
    this.bits[this._hash1(item)] = 1;
    this.bits[this._hash2(item)] = 1;
  }

  has(item) {
    return this.bits[this._hash1(item)] === 1 && this.bits[this._hash2(item)] === 1;
  }
}
