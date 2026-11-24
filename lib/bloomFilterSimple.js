export class SimpleBloomFilter {
  constructor(size = 64) {
    this.size = size;
    this.bits = new Uint8Array(Math.ceil(size / 8));
  }

  _hash(str, seed) {
    let h = seed;
    for (let i = 0; i < str.length; i++) {
      h = (h * 31 + str.charCodeAt(i)) % this.size;
    }
    return h;
  }

  add(item) {
    const h1 = this._hash(item, 7);
    const h2 = this._hash(item, 17);
    this._setBit(h1);
    this._setBit(h2);
  }

  has(item) {
    const h1 = this._hash(item, 7);
    const h2 = this._hash(item, 17);
    return this._getBit(h1) && this._getBit(h2);
  }

  _setBit(idx) {
    this.bits[Math.floor(idx / 8)] |= (1 << (idx % 8));
  }

  _getBit(idx) {
    return (this.bits[Math.floor(idx / 8)] & (1 << (idx % 8))) !== 0;
  }
}
