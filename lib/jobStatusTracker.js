export class JobStatusTracker {
  static STATES = {
    PENDING: 'PENDING',
    QUEUED: 'QUEUED',
    RUNNING: 'RUNNING',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED',
    CANCELLED: 'CANCELLED'
  };

  static ALLOWED_TRANSITIONS = {
    PENDING: ['QUEUED', 'CANCELLED'],
    QUEUED: ['RUNNING', 'CANCELLED'],
    RUNNING: ['COMPLETED', 'FAILED', 'CANCELLED'],
    COMPLETED: [],
    FAILED: ['QUEUED'], // retry
    CANCELLED: []
  };

  static canTransition(from, to) {
    const allowed = JobStatusTracker.ALLOWED_TRANSITIONS[from];
    return allowed ? allowed.includes(to) : false;
  }
}
