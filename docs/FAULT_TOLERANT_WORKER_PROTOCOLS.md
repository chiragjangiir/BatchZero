# Fault-Tolerant Worker Protocols in BatchZero

## 1. Fencing Tokens
To prevent split-brain execution across distributed workers, every job lease incorporates a monotonically increasing fencing token.

## 2. Dynamic Heartbeating
Workers publish heartbeats every 2.5 seconds. If no heartbeat is received within 10 seconds, the coordinator evicts the lease and re-schedules the job partition.
