# Fault-Tolerant Supervisor Strategy Specification

## Overview
Defines failure isolation boundaries and automatic restart hierarchies for BatchZero distributed stream pipelines.

## Supervisor Policies
1. **One-For-One Strategy**:
   - If a child stream worker crashes, only that individual worker is restarted.
2. **Backoff Restarts**:
   - Max 3 restarts within a 10-second rolling window before escalating to partition reassignment.
3. **Dead Letter Queue (DLQ)**:
   - Malformed payloads triggering unrecoverable deserialization exceptions routed to isolated audit topics.
