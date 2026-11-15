# BatchZero Knowledge Ingestion & Data Pipeline

This document describes the archival data lifecycle, submission processing, and SQLite persistence model.

---

## 1. Submission Flow

1. **Contributor Form**: User inputs role, activity category, narrative story, and sentiment.
2. **Sanitization**: String inputs are trimmed, HTML tags stripped, and ID assigned.
3. **Relational Persistence**: Inserted into `experiences` table in `batchzero.db`.
4. **Graph Propagation**: Background aggregator groups experiences into cluster insights.
