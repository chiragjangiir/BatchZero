# BatchZero Local Development & Operations Runbook

This guide contains setup instructions, local development commands, and backup workflows for the BatchZero Next.js application.

---

## 1. Prerequisites

- **Node.js**: v20+ LTS or v22+
- **Package Manager**: `npm` v10+

---

## 2. Local Environment Setup

```bash
# Install dependencies
npm install

# Start development server with Hot Module Replacement
npm run dev

# Open application in browser
open http://localhost:3000
```

---

## 3. Running Verification Tests

```bash
# Run unit and integration tests via Node native test runner
node --test test/*.test.mjs
```

---

## 4. SQLite Database Backup

The database file is located at `./batchzero.db`. To take an atomic online backup without interrupting active web workers:

```bash
sqlite3 batchzero.db ".backup 'backups/batchzero_$(date +%Y%m%d_%H%M%S).db'"
```
