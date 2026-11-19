export class SemaphoreQueue {
  constructor(maxTickets = 2) {
    this.maxTickets = maxTickets;
    this.availableTickets = maxTickets;
    this.waitQueue = [];
  }

  async acquire(tickets = 1) {
    if (this.availableTickets >= tickets) {
      this.availableTickets -= tickets;
      return () => this.release(tickets);
    }
    return new Promise(resolve => {
      this.waitQueue.push({
        tickets,
        resolve: () => {
          this.availableTickets -= tickets;
          resolve(() => this.release(tickets));
        }
      });
    });
  }

  release(tickets = 1) {
    this.availableTickets += tickets;
    if (this.waitQueue.length > 0 && this.waitQueue[0].tickets <= this.availableTickets) {
      const next = this.waitQueue.shift();
      next.resolve();
    }
  }
}
