import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import { getSessionUserId } from "@/lib/auth";
import {
  getLessonsForMonth,
  isMonthCurriculumComplete,
} from "@/lessons/lessonRegistry";
import StudentNav from "@/components/StudentNav";
import MonthLessonList from "@/components/MonthLessonList";

const MONTH = 2;

// Month 2 page: lists the registered Month 2 lessons (from lessonRegistry)
// and the month's topics. While no lessons are registered, an empty state
// is shown instead of the lesson list.
export default async function Month2Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // ---- Protection: only the session cookie decides who this is ----
  const userId = await getSessionUserId();
  if (!userId) {
    redirect({ href: "/login", locale });
  }

  const t = await getTranslations("monthPage");
  const journey = await getTranslations("journey.steps");
  const lessonT = await getTranslations("lessonPage");
  // Topics are read from the public Course page text, so both pages always
  // show the same list.
  const course = await getTranslations("coursePage.curriculum.months.m2");
  const topics = course("topics").split(",");
  const hasLessons = getLessonsForMonth(MONTH).length > 0;
  // A fully built month (COMPLETE_MONTHS) shows "Topics covered";
  // a month still being built shows "Planned topics".
  const topicsHeading = isMonthCurriculumComplete(MONTH)
    ? t("coveredTopicsHeading")
    : t("plannedTopicsHeading");

  return (
    <>
      <StudentNav />

      <section className="px-6 pt-12 pb-8">
        <div className="max-w-[840px] mx-auto">
          <Link
            href="/student"
            className="text-[0.88rem] font-semibold text-lake-dark hover:underline"
          >
            &larr; {t("backToDashboard")}
          </Link>
          <span className="block text-[0.92rem] text-lake-dark font-semibold mt-6 mb-2">
            {t("kicker", { month: MONTH })}
          </span>
          <h1 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium mb-3">
            {journey("s2")}
          </h1>
          <p className="text-ink/70 mb-0">{t("month2Description")}</p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-[840px] mx-auto">
          {hasLessons ? (
            <MonthLessonList month={MONTH} userId={userId!} />
          ) : (
            <div className="border border-line bg-birch p-6 mb-8">
              <h2 className="text-[1.1rem] mb-2">{t("comingSoonHeading")}</h2>
              <p className="text-[0.95rem] text-ink/70 mb-4">{t("comingSoonText")}</p>
              <Link
                href="/student/course/month-1"
                className="text-[0.88rem] font-semibold text-lake-dark hover:underline"
              >
                &larr; {lessonT("backToMonth", { month: 1 })}
              </Link>
            </div>
          )}

          <h2 className="text-[1.15rem] mb-4">{topicsHeading}</h2>
          <ul className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <li
                key={topic}
                className="text-[0.85rem] border border-line bg-snow px-3 py-1.5 rounded-full text-ink/80"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}