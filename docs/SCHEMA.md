# BatchZero Database & Entity Relational Schema

This document defines the relational storage architecture and SQLite table schemas utilized in BatchZero.

---

## 1. Relational Entities

### `experiences` Table
Stores qualitative institutional knowledge submitted by campus contributors.

| Column | Type | Constraints | Description |
|:-------|:-----|:------------|:------------|
| `id` | `TEXT` | `PRIMARY KEY` | Unique nanoid / random alphanumeric identifier |
| `role` | `TEXT` | `NOT NULL` | Role of contributor (e.g. "Organizer", "Participant") |
| `activityType` | `TEXT` | `NOT NULL` | Event category ("Hackathon", "Placement Drive") |
| `story` | `TEXT` | `NOT NULL` | Narrative incident or retrospective observation |
| `sentiment` | `TEXT` | `NOT NULL` | Sentiment classifier ('Positive', 'Neutral', etc.) |
| `timestamp` | `DATETIME` | `DEFAULT CURRENT_TIMESTAMP` | Submission timestamp |

---

### `archives` Table
Stores decade-level institutional milestone summaries and outcome records.

| Column | Type | Constraints | Description |
|:-------|:-----|:------------|:------------|
| `id` | `TEXT` | `PRIMARY KEY` | Milestone identifier |
| `year` | `TEXT` | `NOT NULL` | Academic year (e.g. "2024-2025") |
| `title` | `TEXT` | `NOT NULL` | Summary milestone headline |
| `story` | `TEXT` | `NOT NULL` | Archival retrospective description |
| `image` | `TEXT` | | Optional static asset URL |
| `outcome` | `TEXT` | | Quantitative or qualitative summary outcome |
| `sentimentScore`| `REAL` | | Normalized score between -1.0 and +1.0 |
| `data` | `JSON` | | Flexible unstructured metadata payload |
