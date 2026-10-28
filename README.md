# Suomen Polku

A bilingual Finnish course for Bangladeshi learners. Lessons are written in **Finnish**, with explanations in **Bangla** (Bengali script) and **English** side by side. The site itself works in Finnish and English.

**Live:** https://suomen-polku-app.vercel.app (English · Suomi)

## Curriculum status

| Month | Topic | Status |
|---|---|---|
| 1 | Finnish Foundations: alphabet, pronunciation, *olla*, present tense, verb types 1–6, review | ✅ 10 lessons |
| 2 | Everyday Finnish: negatives, questions, infinitives, introductions, family and work, shopping, directions, time and plans, health, review | ✅ 10 lessons |
| 3–10 | K-P-T and nouns, cases, adjectives and adverbs, verb forms, sentence construction, real-life Finnish | Planned |

Curriculum guidance: mentor Rafiqul Hyder's teaching materials are the primary reference. Finnish stays Finnish; grammar is explained in Bangla script with English clarification.

## Features

- Localised routes with `next-intl` (for example `/fi/kurssi` ↔ `/en/course`)
- Custom authentication: bcrypt password hashing and signed JWTs in an httpOnly session cookie
- Per-lesson progress tracking (PostgreSQL + Prisma); a month counts as completed only when its curriculum is fully built and all of its lessons are done
- Lesson content stored as typed data, with one registry (`src/lessons/lessonRegistry.ts`) as the source of truth
- Each lesson: explanations, examples, vocabulary, pronunciation notes, common mistakes, practice and a quiz

## Tech stack

Next.js 16 (App Router) · React · TypeScript · Tailwind CSS v4 · next-intl · Prisma · PostgreSQL (Neon) · Vercel

## Project structure

```
messages/            UI text (en.json, fi.json)
prisma/              database schema and migrations
src/app/[locale]/    pages (public site, login, student dashboard, lessons)
src/components/      shared UI and lesson components
src/i18n/            routing and localisation setup
src/lessons/         lesson content and the lesson registry
src/lib/             auth and database helpers
```

## Getting started

Requirements: Node.js 20 or newer, and a PostgreSQL database (for example a free Neon project).

```bash
npm install
```

Create a file named `.env` in the project root. **Never commit this file**; it is listed in `.gitignore`.

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require"
JWT_SECRET="a-long-random-string"
```

Then set up the database and start the development server:

```bash
npx prisma migrate deploy
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npx tsc --noEmit
npm run lint
```

## Adding a lesson

1. Write the content in `src/lessons/` (Finnish, Bangla and English)
2. Register it in `src/lessons/index.ts` and `src/lessons/lessonRegistry.ts`
3. Add the localised route in `src/i18n/routing.ts`
4. Create the lesson page under `src/app/[locale]/student/course/month-N/`
5. When a month's final lesson exists, add the month to `COMPLETE_MONTHS`

## Security

- Secrets (`DATABASE_URL`, `JWT_SECRET`) belong only in `.env` locally and in the hosting provider's environment variables, never in the repository or this README
- User IDs always come from the server-side session, never from the client