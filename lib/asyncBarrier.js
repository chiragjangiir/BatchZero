export class AsyncBarrier {
  constructor(parties) {
    this.parties = parties;
    this.arrived = 0;
    this.waiters = [];
  }

  async wait() {
    this.arrived++;
    if (this.arrived === this.parties) {
      const resolving = this.waiters.slice();
      this.waiters = [];
      this.arrived = 0;
      for (const resolve of resolving) {
        resolve();
      }
      return;
    }
    return new Promise((resolve) => {
      this.waiters.push(resolve);
    });
  }
}
