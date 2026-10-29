// Stable lesson IDs. These never change, even if URLs or titles are
// translated. The same ID is used for both the Finnish and English routes.
// This is the ONE shared list of lessons: the progress API, the Month
// pages and the dashboard all read from here.

export type LessonHref =
  | "/student/course/month-1/personal-pronouns"
  | "/student/course/month-1/finnish-alphabet-pronunciation"
  | "/student/course/month-1/olla-basic-sentences"
  | "/student/course/month-1/present-tense"
  | "/student/course/month-1/verb-types-1-2"
  | "/student/course/month-1/verb-type-3"
  | "/student/course/month-1/verb-type-4"
  | "/student/course/month-1/verb-type-5"
  | "/student/course/month-1/verb-type-6"
  | "/student/course/month-1/review"
  | "/student/course/month-2/negative-sentences"
  | "/student/course/month-2/questions"
  | "/student/course/month-2/infinitives"
  | "/student/course/month-2/greetings-introductions"
  | "/student/course/month-2/family-work-everyday-life"
  | "/student/course/month-2/food-shopping-everyday-needs"
  | "/student/course/month-2/directions-and-transport"
  | "/student/course/month-2/appointments-time-plans"
  | "/student/course/month-2/health-feelings-help"
  | "/student/course/month-2/review"
  | "/student/course/month-3/kpt-introduction"
  | "/student/course/month-3/kpt-more-patterns";

export type LessonMeta = {
  id: string;
  month: number;
  slug: string; // matches the lesson data file's slug (src/lessons/index.ts)
  href: LessonHref; // internal route key from src/i18n/routing.ts
};

// Months whose curriculum is FULLY built. A month can show "Completed" on
// the dashboard only if it is listed here AND the student has completed
// all of its lessons. Add a month here only when its last lesson exists.
export const COMPLETE_MONTHS: readonly number[] = [1, 2];

export function isMonthCurriculumComplete(month: number): boolean {
  return COMPLETE_MONTHS.includes(month);
}

// Order here = order shown on the Month pages.
export const LESSONS: LessonMeta[] = [
  { id: "month-1-personal-pronouns", month: 1, slug: "personal-pronouns", href: "/student/course/month-1/personal-pronouns" },
  { id: "month-1-finnish-alphabet-pronunciation", month: 1, slug: "finnish-alphabet-pronunciation", href: "/student/course/month-1/finnish-alphabet-pronunciation" },
  { id: "month-1-olla-basic-sentences", month: 1, slug: "olla-basic-sentences", href: "/student/course/month-1/olla-basic-sentences" },
  { id: "month-1-present-tense", month: 1, slug: "present-tense", href: "/student/course/month-1/present-tense" },
  { id: "month-1-verb-types-1-2", month: 1, slug: "verb-types-1-2", href: "/student/course/month-1/verb-types-1-2" },
  { id: "month-1-verb-type-3", month: 1, slug: "verb-type-3", href: "/student/course/month-1/verb-type-3" },
  { id: "month-1-verb-type-4", month: 1, slug: "verb-type-4", href: "/student/course/month-1/verb-type-4" },
  { id: "month-1-verb-type-5", month: 1, slug: "verb-type-5", href: "/student/course/month-1/verb-type-5" },
  { id: "month-1-verb-type-6", month: 1, slug: "verb-type-6", href: "/student/course/month-1/verb-type-6" },
  { id: "month-1-review", month: 1, slug: "review", href: "/student/course/month-1/review" },
  { id: "month-2-negative-sentences", month: 2, slug: "negative-sentences", href: "/student/course/month-2/negative-sentences" },
  { id: "month-2-questions", month: 2, slug: "questions", href: "/student/course/month-2/questions" },
  { id: "month-2-infinitives", month: 2, slug: "infinitives", href: "/student/course/month-2/infinitives" },
  { id: "month-2-greetings-introductions", month: 2, slug: "greetings-introductions", href: "/student/course/month-2/greetings-introductions" },
  { id: "month-2-family-work-everyday-life", month: 2, slug: "family-work-everyday-life", href: "/student/course/month-2/family-work-everyday-life" },
  { id: "month-2-food-shopping-everyday-needs", month: 2, slug: "food-shopping-everyday-needs", href: "/student/course/month-2/food-shopping-everyday-needs" },
  { id: "month-2-directions-and-transport", month: 2, slug: "directions-and-transport", href: "/student/course/month-2/directions-and-transport" },
  { id: "month-2-appointments-time-plans", month: 2, slug: "appointments-time-plans", href: "/student/course/month-2/appointments-time-plans" },
  { id: "month-2-health-feelings-help", month: 2, slug: "health-feelings-help", href: "/student/course/month-2/health-feelings-help" },
  { id: "month-2-review", month: 2, slug: "review", href: "/student/course/month-2/review" },
  { id: "month-3-kpt-introduction", month: 3, slug: "kpt-introduction", href: "/student/course/month-3/kpt-introduction" },
  { id: "month-3-kpt-more-patterns", month: 3, slug: "kpt-more-patterns", href: "/student/course/month-3/kpt-more-patterns" },
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