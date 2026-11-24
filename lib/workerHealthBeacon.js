export class WorkerHealthBeacon {
  constructor(workerId) {
    this.workerId = workerId;
    this.startTime = Date.now();
    this.lastHeartbeat = this.startTime;
    this.status = 'HEALTHY';
  }

  heartbeat(now = Date.now()) {
    this.lastHeartbeat = now;
  }

  getUptimeSeconds(now = Date.now()) {
    return Math.floor((now - this.startTime) / 1000);
  }

  isStale(timeoutMs = 5000, now = Date.now()) {
    return (now - this.lastHeartbeat) > timeoutMs;
  }
}
