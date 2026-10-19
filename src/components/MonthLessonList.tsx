import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { prisma } from "@/lib/prisma";
import { getLesson } from "@/lessons";
import { getLessonsForMonth } from "@/lessons/lessonRegistry";

// Shared, registry-driven lesson list for a month page.
// Shows nothing if the month has no registered lessons.
// Completion is read only for the given (session) user.
export default async function MonthLessonList({
  month,
  userId,
}: {
  month: number;
  userId: string;
}) {
  const t = await getTranslations("monthPage");
  const monthLessons = getLessonsForMonth(month);
  if (monthLessons.length === 0) return null;

  const rows = await prisma.lessonProgress.findMany({
    where: {
      userId,
      lessonId: { in: monthLessons.map((l) => l.id) },
      completed: true,
    },
    select: { lessonId: true },
  });
  const completedIds = new Set(rows.map((r: { lessonId: string }) => r.lessonId));

  const items = monthLessons.flatMap((meta) => {
    const lesson = getLesson(month, meta.slug);
    return lesson ? [{ ...meta, lesson }] : [];
  });

  return (
    <div className="mb-10">
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
  );
}