<h1 align="center">Suomen Polku</h1>

<p align="center">
  <b>A Finnish course for Bangla-speaking learners, with every lesson in Finnish, Bangla and English side by side.</b>
</p>

<p align="center">
  <a href="https://suomen-polku-app.vercel.app/en"><b>Live demo (English)</b></a> ·
  <a href="https://suomen-polku-app.vercel.app/fi"><b>Live demo (Suomi)</b></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black" alt="Next.js 16">
  <img src="https://img.shields.io/badge/TypeScript-strict-3178c6" alt="TypeScript">
  <img src="https://img.shields.io/badge/PostgreSQL-Prisma-336791" alt="PostgreSQL with Prisma">
  <img src="https://img.shields.io/badge/deployed-Vercel-black" alt="Deployed on Vercel">
</p>

![Suomen Polku home page](docs/screenshots/home.png)

## Why this exists

Most Finnish courses are written for English or Finnish speakers. Learners from Bangladesh end up translating twice: Finnish to English, then English to Bangla in their heads.

Suomen Polku ("the Finnish path") removes that extra step. Every explanation, example, exercise and quiz question is written in **Finnish, Bangla (বাংলা) and English** together, so learners can lean on whichever language they understand best.

## What a lesson looks like

Each lesson follows the same structure: introduction, learning objectives, grammar, examples, vocabulary, pronunciation, common mistakes, practice, a mini quiz and a summary.

![A lesson page showing Finnish, Bangla and English text together](docs/screenshots/lesson.png)

![The vocabulary table with Finnish, Bangla and English columns](docs/screenshots/vocabulary.png)

Students mark lessons complete, and their progress is saved to their account.

## Features

- **Two languages for the interface, three for the content.** The site switches between Finnish and English; lesson content is always shown in Finnish, Bangla and English.
- **Localised URLs.** Every page has a real Finnish address and a real English one, for example `/fi/kurssi` ↔ `/en/course` and `/fi/opiskelija` ↔ `/en/student`.
- **Accounts and protected lessons.** Students register and log in; lesson pages and the dashboard are only available to signed-in users.
- **Progress tracking.** Completion is stored per student and per lesson, and a month is marked complete once all of its lessons are done.
- **Responsive.** Works on phones as well as desktops.

![The home page in Finnish and a lesson page on a phone](docs/screenshots/mobile.png)

## Curriculum status

| Month | Topic area | Status |
| --- | --- | --- |
| Month 1 | Alphabet and pronunciation, pronouns, *olla*, present tense, verb types 1–6, review | Complete (10 lessons) |
| Month 2 | Negative sentences, questions, infinitives, greetings and introductions | In progress (4 lessons so far) |
| Months 3–10 | Planned | Not started |

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Internationalisation | next-intl (localised routes and UI strings) |
| Database | PostgreSQL on Neon, accessed through Prisma 6 |
| Authentication | bcryptjs for password hashing, jose for signed JWTs |
| Hosting | Vercel |

## Engineering decisions

**Lesson content is typed data, not translation strings.** UI labels such as "Vocabulary" or "Mark complete" go through next-intl message files. Teaching content lives in `src/lessons/*.ts` as objects that follow one `Lesson` type. Putting hundreds of trilingual example sentences into the global translation files would make them unmanageable as the course grows; with a shared type, TypeScript flags a lesson with a missing field, such as an example or vocabulary item without its Bangla text, before it ships.

**One registry is the source of truth.** `src/lessons/lessonRegistry.ts` gives every lesson a stable ID, its month and its route. The progress API, the month pages and the dashboard all read from it, so a lesson can't exist in one place and be missing from another. IDs never change, even when URLs or titles are translated.

**The session decides who you are, never the request.** Passwords are hashed with bcrypt (12 rounds). Sessions are HS256-signed JWTs stored in `httpOnly`, `sameSite=lax` cookies, marked `secure` in production. The progress API reads the user only from the session cookie and ignores any user ID in the request body. If `JWT_SECRET` is missing, the app refuses to sign tokens instead of falling back to a guessable default.

**Progress updates are idempotent.** Completing a lesson is an upsert on a unique `(userId, lessonId)` pair, so clicking twice never creates duplicates, and the lesson ID is validated against the registry before anything is written.

## Data model

```prisma
model User {
  id             String           @id @default(cuid())
  name           String
  email          String           @unique
  passwordHash   String
  monthProgress  MonthProgress[]
  lessonProgress LessonProgress[]
}

model LessonProgress {
  userId      String
  lessonId    String           // stable ID from lessonRegistry.ts
  completed   Boolean
  completedAt DateTime?
  @@unique([userId, lessonId])
}

model MonthProgress {
  userId    String
  month     Int
  completed Boolean
  @@unique([userId, month])
}
```

*(Simplified; see [`prisma/schema.prisma`](prisma/schema.prisma) for the full schema.)*

## Project structure

```
src/
  app/
    [locale]/            pages for /fi and /en (home, course, about, student area...)
    api/auth/            register, login, logout, me, progress/complete
  components/            page sections
    lesson/              reusable lesson sections (grammar, vocabulary, quiz...)
  lessons/               lesson content as typed data + the lesson registry
  i18n/                  locale routing and localised pathnames
  lib/                   auth helpers and the Prisma client
messages/                UI strings (en.json, fi.json)
prisma/                  schema and migrations
```

## Running it locally

You need **Node.js 20 or newer** and a **PostgreSQL** database (a free [Neon](https://neon.tech) database works).

1. Clone and install:

   ```powershell
   git clone https://github.com/webdomain0126/suomen-polku.git
   cd suomen-polku
   npm install
   ```

2. Create a `.env` file in the project folder:

   ```env
   DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
   JWT_SECRET="a-long-random-string"
   ```

3. Create the database tables and start the app:

   ```powershell
   npx prisma migrate deploy
   npm run dev
   ```

4. Open [http://localhost:3000/en](http://localhost:3000/en).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Roadmap

- [ ] Finish Month 2 and continue the curriculum
- [ ] Automated tests and a GitHub Actions workflow (lint, type check, tests)
- [ ] Check typed practice answers automatically instead of only revealing them
- [ ] Replace the per-lesson page files with one dynamic route driven by the registry
- [ ] Rate limiting on the login endpoint

## Author

Built by **Tisa Akhter**, full-stack developer.

[GitHub](https://github.com/webdomain0126) · [LinkedIn](https://www.linkedin.com/in/freelancertisa/)
