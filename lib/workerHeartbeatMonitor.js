export class WorkerHeartbeatMonitor {
  constructor(timeoutMs = 1000) {
    this.timeoutMs = timeoutMs;
    this.workers = new Map();
  }

  ping(workerId, now = Date.now()) {
    this.workers.set(workerId, now);
  }

  isDead(workerId, now = Date.now()) {
    const last = this.workers.get(workerId);
    if (!last) return true;
    return (now - last) > this.timeoutMs;
  }
}
