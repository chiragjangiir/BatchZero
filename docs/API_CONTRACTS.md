# BatchZero Server Actions & API Contracts

Documentation of backend data endpoints and Next.js server action signatures.

---

## 1. Server Actions

### `addExperience(data: ExperienceInput): Promise<Experience>`
- Validates input fields.
- Persists record to SQLite.
- Revalidates path `/archive`.
