export class WorkerLeaseManager {
  constructor(leaseTtlMs = 5000) {
    this.leaseTtlMs = leaseTtlMs;
    this.leases = new Map();
  }

  acquire(workerId, now = Date.now()) {
    const existing = this.leases.get(workerId);
    if (!existing || now >= existing.expiresAt) {
      this.leases.set(workerId, { expiresAt: now + this.leaseTtlMs });
      return true;
    }
    return false;
  }

  renew(workerId, now = Date.now()) {
    if (this.leases.has(workerId)) {
      this.leases.set(workerId, { expiresAt: now + this.leaseTtlMs });
      return true;
    }
    return false;
  }

  isExpired(workerId, now = Date.now()) {
    const lease = this.leases.get(workerId);
    return !lease || now >= lease.expiresAt;
  }
}
