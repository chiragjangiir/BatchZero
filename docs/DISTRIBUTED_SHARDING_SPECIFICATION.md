# Distributed Sharding and Partitioning Architecture

## Overview
This specification details the horizontal partitioning protocol for BatchZero stream clusters.

## Partition Keys and Hashing
- MurmurHash3 algorithm applied to partition keys.
- Uniform distribution across a 64-bit ring modulus.

## Rebalancing Protocol
1. New node joins cluster gossiping node health state.
2. Virtual bucket ownership transfers asynchronously.
3. Active worker leases drain gracefully before cutover.
