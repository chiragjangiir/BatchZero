# Distributed Event Stream Specification in BatchZero

## 1. At-Least-Once Delivery
Workers acknowledge stream offsets after persistent storage commit. Unacknowledged events trigger partition lease reallocation.

## 2. Idempotency Guarantees
Consumer pipelines deduplicate batch events using sliding-window MurmurHash3 signatures.
