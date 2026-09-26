import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import { getSessionUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getLesson } from "@/lessons";
import { getLessonsForMonth } from "@/lessons/lessonRegistry";
import StudentNav from "@/components/StudentNav";

const MONTH = 1;

export default async function Month1Page({
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

  // Lessons for this month come from the shared registry.
  const monthLessons = getLessonsForMonth(MONTH);

  // Completion is read only for the logged-in student's own records.
  const rows = await prisma.lessonProgress.findMany({
    where: {
      userId: userId!,
      lessonId: { in: monthLessons.map((l) => l.id) },
      completed: true,
    },
    select: { lessonId: true },
  });
  const completedIds = new Set(rows.map((r: { lessonId: string }) => r.lessonId));

  const items = monthLessons.flatMap((meta) => {
    const lesson = getLesson(MONTH, meta.slug);
    return lesson ? [{ ...meta, lesson }] : [];
  });

  return (
    <>
      <StudentNav />

      <section className="px-6 pt-12 pb-8">
        <div className="max-w-[840px] mx-auto">
          <Link
            href="/student"
            className="text-[0.88rem] font-semibold text-lake-dark hover:underline"
          >
            ← {t("backToDashboard")}
          </Link>
          <span className="block text-[0.92rem] text-lake-dark font-semibold mt-6 mb-2">
            {t("kicker", { month: MONTH })}
          </span>
          <h1 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium mb-3">
            {journey("s1")}
          </h1>
          <p className="text-ink/70 mb-0">{t("month1Description")}</p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-[840px] mx-auto">
          <h2 className="text-[1.15rem] mb-5">{t("lessonsHeading")}</h2>
          <ul className="flex flex-col gap-4">
            {items.map((item, i) => {
              const done = completedIds.has(item.id);
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="border border-line bg-snow p-5 flex items-center justify-between gap-4 flex-wrap transition-colors hover:border-lake hover:bg-paper"
                  >
                    <div>
                      <span className="font-serif text-lake-dark text-[0.85rem]">
                        {t("lessonNumber", { number: i + 1 })}
                      </span>
                      <h3 className="text-[1.05rem] mb-0.5 mt-1">
                        {item.lesson.title.fi}
                      </h3>
                      {item.lesson.title.bn && (
                        <p className="text-[0.9rem] text-ink/80 mb-0.5">
                          {item.lesson.title.bn}
                        </p>
                      )}
                      <p className="text-[0.85rem] text-ink/60 italic mb-0">
                        {item.lesson.title.en}
                      </p>
                    </div>
                    <span
                      className={`text-[0.76rem] font-semibold px-2.5 py-1 rounded-full ${
                        done ? "bg-spruce-dark text-paper" : "bg-birch text-ink/70"
                      }`}
                    >
                      {done ? t("statusCompleted") : t("statusNotStarted")}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}