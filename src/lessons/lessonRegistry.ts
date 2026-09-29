// Stable lesson IDs. These never change, even if URLs or titles are
// translated. The same ID is used for both the Finnish and English routes.
// This is the ONE shared list of lessons: the progress API, the Month
// page and the dashboard all read from here.

export type LessonHref =
  | "/student/course/month-1/personal-pronouns"
  | "/student/course/month-1/finnish-alphabet-pronunciation"
  | "/student/course/month-1/olla-basic-sentences"
  | "/student/course/month-1/present-tense";

export type LessonMeta = {
  id: string;
  month: number;
  slug: string; // matches the lesson data file's slug (src/lessons/index.ts)
  href: LessonHref; // internal route key from src/i18n/routing.ts
};

// Order here = order shown on the Month page.
export const LESSONS: LessonMeta[] = [
  {
    id: "month-1-personal-pronouns",
    month: 1,
    slug: "personal-pronouns",
    href: "/student/course/month-1/personal-pronouns",
  },
  {
    id: "month-1-finnish-alphabet-pronunciation",
    month: 1,
    slug: "finnish-alphabet-pronunciation",
    href: "/student/course/month-1/finnish-alphabet-pronunciation",
  },
  {
    id: "month-1-olla-basic-sentences",
    month: 1,
    slug: "olla-basic-sentences",
    href: "/student/course/month-1/olla-basic-sentences",
  },
  {
    id: "month-1-present-tense",
    month: 1,
    slug: "present-tense",
    href: "/student/course/month-1/present-tense",
  },
];

export function getLessonMeta(lessonId: string): LessonMeta | undefined {
  return LESSONS.find((lesson) => lesson.id === lessonId);
}

export function getLessonsForMonth(month: number): LessonMeta[] {
  return LESSONS.filter((lesson) => lesson.month === month);
}

export function getLessonIdsForMonth(month: number): string[] {
  return getLessonsForMonth(month).map((lesson) => lesson.id);
}