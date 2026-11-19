export class BitSet {
  constructor(size = 32) {
    this.words = new Uint32Array(Math.ceil(size / 32));
  }

  set(idx) {
    this.words[Math.floor(idx / 32)] |= 1 << (idx % 32);
  }

  get(idx) {
    return (this.words[Math.floor(idx / 32)] & (1 << (idx % 32))) !== 0;
  }

  clear(idx) {
    this.words[Math.floor(idx / 32)] &= ~(1 << (idx % 32));
  }
}
