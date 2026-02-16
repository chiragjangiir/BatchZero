<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/SQLite-3-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Version-0.1.0-orange?style=for-the-badge" alt="Version" />
</p>

<h1 align="center"> BatchZero</h1>

<p align="center">
  <strong>Turn lived experience into institutional memory. No batch starts from zero again.</strong>
</p>

<p align="center">
  <em>An Institutional Intelligence platform that captures, preserves, and surfaces the knowledge that graduates walk away with — so the next generation never has to relearn the hard way.</em>
</p>

---

## 📌 The Problem

Every year in colleges and organizations, **knowledge resets**. When students graduate, their hard-won insights about what works (and what spectacularly fails) — from hackathon logistics to placement strategies — vanish with them. The next batch is left to repeat the same mistakes, waste the same budgets, and learn the same lessons from scratch.

**BatchZero** solves the institutional amnesia problem by turning raw student experiences into structured, searchable, semantic intelligence.

---

## 🎯 Target Audience

- 🏫 **College Administrators** looking to improve institutional decision-making
- 🎓 **Student Bodies & Clubs** wanting to preserve organizational knowledge
- 📊 **Education Technologists** building data-driven campus tools
- 🧑‍💻 **Developers** interested in full-stack Next.js apps with local-first databases

---

## ⚡ Key Features

| Feature | Description |
|---------|-------------|
| 🏦 **Experience Ingestion** | Multi-step form to capture raw stories with role, activity type, narrative, and emotional sentiment |
| 🧠 **Intelligence Dashboard** | Real-time pattern extraction with live insights, semantic cluster visualizations, and key metrics |
| 📄 **Strategic Reports** | Tiered report system — from daily digests (free) to deep analysis like Placement Failure Analysis and Retention Forecasting (premium) |
| 🗂️ **Decade Archive** | Historical case studies (2016–2024) seeded into the database, showcasing institutional lessons learned |
| 🌗 **Dark/Light Mode** | Premium glassmorphism UI with seamless theme switching via `next-themes` |
| ✨ **Smooth Animations** | Micro-interactions and staggered reveals powered by Framer Motion |
| 💾 **Local-First Storage** | Zero-config SQLite database via `better-sqlite3` — no cloud dependency required |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + Custom Glassmorphism System |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Database** | [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) (Local SQLite) |
| **Cloud DB** | [Firebase / Firestore](https://firebase.google.com/) (Optional) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | [Geist Sans & Mono](https://vercel.com/font) (via `next/font`) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/BatchZero.git
cd BatchZero

# 2. Install dependencies
npm install

# 3. (Optional) Set up Firebase environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase config

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app 🎉

> **Note:** The SQLite database (`batchzero.db`) is auto-created and seeded with decade archive data on first run. No manual setup needed.

---

## 💻 Usage

### Ingest an Experience

Navigate to **Dashboard → Ingest Experience** and fill out:
1. **Your Role** — Participant, Organizer, Sponsor, or Volunteer
2. **Activity Type** — Hackathon, Placement Interview, Club Event, or Exam Prep
3. **The Story** — Your raw narrative of what happened
4. **Emotional Outcome** — Frustrated → Neutral → Excited

Click **"Ingest to Memory"** to bank the experience.

### View Intelligence

Navigate to **Dashboard → Intelligence** to see:
- Live insights extracted from the memory bank
- Semantic cluster map with animated topic bubbles
- Key metrics (Total Memories, Active Patterns, Critical Risks, Contributors)
- Decade archive with historical case studies

---

## 📁 Project Structure

```
BatchZero/
├── app/
│   ├── api/
│   │   ├── ingest/
│   │   │   └── route.ts          # POST — ingest new experiences
│   │   └── intelligence/
│   │       └── route.ts          # GET  — fetch insights from archives
│   ├── dashboard/
│   │   ├── ingest/
│   │   │   └── page.tsx          # Experience ingestion form
│   │   ├── intelligence/
│   │   │   └── page.tsx          # Intelligence dashboard & cluster map
│   │   ├── reports/
│   │   │   └── page.tsx          # Strategic reports (free + premium)
│   │   └── layout.tsx            # Dashboard sidebar & navigation
│   ├── globals.css               # Theme tokens, glassmorphism, scrollbar
│   ├── layout.tsx                # Root layout with ThemeProvider
│   └── page.tsx                  # Landing page / hero
├── components/
│   ├── mode-toggle.tsx           # Dark/Light mode toggle button
│   └── theme-provider.tsx        # next-themes provider wrapper
├── lib/
│   ├── archives.ts               # Decade archive seed data (2016–2024)
│   ├── db.ts                     # SQLite database init, tables & seeding
│   ├── firebase.ts               # Firebase/Firestore client (optional)
│   └── utils.ts                  # Utility functions (cn, generateId)
├── types/
│   └── index.ts                  # TypeScript types (Experience, Insight, Cluster)
├── public/
│   └── images/                   # Archive images (2016, 2020, 2024)
├── batchzero.db                  # Auto-generated SQLite database
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root (only required if using Firebase):

```env
# Firebase Configuration (Optional)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

> **Tip:** The app works out-of-the-box with SQLite only. Firebase is optional for cloud sync.

---

## 🔌 API Endpoints

### `POST /api/ingest`

Ingest a new experience into the memory bank.

**Request Body:**
```json
{
  "role": "Organizer",
  "activityType": "Hackathon",
  "story": "We forgot to order extension cords until the morning of the event...",
  "sentiment": "Frustrated"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Experience embedded and prioritized.",
  "data": { "id": "abc123", "role": "Organizer", "story": "..." }
}
```

---

### `GET /api/intelligence`

Retrieve processed insights from the archive data.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "archive_2016",
      "title": "The Great WiFi Collapse",
      "description": "Top-tier hackathon. 500 hackers...",
      "type": "Risk",
      "confidence": 0.2,
      "relatedClusterIds": ["infrastructure", "logistics"]
    }
  ]
}
```

---

## 🧪 Testing

```bash
# Run the linter
npm run lint

# Build the project (validates TypeScript compilation)
npm run build
```

---

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy BatchZero:

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com/new)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

> ⚠️ **Important:** `better-sqlite3` requires a native binary. For production deployments, consider migrating to a cloud database like [Supabase](https://supabase.com/) or [PlanetScale](https://planetscale.com/).

### Other Platforms

```bash
# Build for production
npm run build

# Start the production server
npm start
```

---

## 🗺️ Roadmap

- [ ] 🤖 **AI-Powered Semantic Embeddings** — Real vector embeddings for experience stories
- [ ] 🔍 **Natural Language Querying** — Ask questions like "Why did placements fail in 2023?"
- [ ] 📊 **PDF Report Generation** — Export intelligence reports as styled PDFs
- [ ] 🔐 **Authentication & RBAC** — Role-based access for admins, faculty, and students
- [ ] 📱 **Mobile Responsive Dashboard** — Optimized mobile experience
- [ ] 🔗 **Cross-Institution Federation** — Share anonymized insights across colleges
- [ ] 📈 **Predictive Analytics** — ML-powered forecasting for student outcomes
- [ ] 🎯 **Recommendation Engine** — Actionable suggestions based on historical patterns

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "feat: add amazing feature"
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style (TypeScript strict mode)
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages
- Write meaningful PR descriptions
- Ensure `npm run build` passes before submitting

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>Built with 💜 by the BatchZero Team</strong>
  <br />
  <em>Because no batch should ever start from zero.</em>
</p>
