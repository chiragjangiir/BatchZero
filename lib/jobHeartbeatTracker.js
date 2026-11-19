export class JobHeartbeatTracker {
  constructor(timeoutMs = 5000) {
    this.timeoutMs = timeoutMs;
    this.heartbeats = new Map();
  }

  recordHeartbeat(jobId, now = Date.now()) {
    this.heartbeats.set(jobId, now);
  }

  isStalled(jobId, now = Date.now()) {
    const last = this.heartbeats.get(jobId);
    if (!last) return true;
    return (now - last) > this.timeoutMs;
  }
}
