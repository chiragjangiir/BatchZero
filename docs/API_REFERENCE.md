# BatchZero API Reference

## Utilities
- `calculateBackoff(attempt, baseDelay, maxDelay, factor)`: Returns exponential backoff ms.
- `chunkArray(array, chunkSize)`: Partitions array into fixed batches.
- `maskString(str, start, end, char)`: Masks sensitive values.
- `safeJsonParse(str, fallback)`: Safe JSON deserialization.
