import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Lesson } from "@/lessons/types";
import TriText from "./TriText";

// Months that have a lesson-list page. Only Month 1 for now.
const MONTH_LINKS: Record<number, "/student/course/month-1"> = {
  1: "/student/course/month-1",
};

export default function LessonHeader({ lesson }: { lesson: Lesson }) {
  const t = useTranslations("lessonPage");
  const monthHref = MONTH_LINKS[lesson.month];

  return (
    <section className="pt-12 pb-8 px-6">
      <div className="max-w-[840px] mx-auto">
        {monthHref && (
          <Link
            href={monthHref}
            className="inline-block text-[0.88rem] font-semibold text-lake-dark hover:underline mb-6"
          >
            ← {t("backToMonth", { month: lesson.month })}
          </Link>
        )}
        <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
          {t("monthLabel", { month: lesson.month })}
        </span>
        <h1 className="text-[clamp(1.9rem,3.8vw,2.6rem)] font-medium mb-1">
          {lesson.title.fi}
        </h1>
        {lesson.title.bn && (
          <p className="text-[1.15rem] text-ink/80 mb-1">{lesson.title.bn}</p>
        )}
        <p className="text-[1rem] text-ink/60 italic mb-6">
          {lesson.title.en}
        </p>

        <div className="border border-line bg-snow p-5 mb-6">
          <TriText text={lesson.intro} />
        </div>

        <h2 className="text-[1.1rem] mb-3">{t("objectivesHeading")}</h2>
        <ul className="space-y-3">
          {lesson.objectives.map((obj, i) => (
            <li
              key={i}
              className="flex gap-3 items-start border-b border-line pb-3 last:border-0"
            >
              <span className="text-lake-dark font-serif text-[0.9rem] mt-0.5">
                {i + 1}.
              </span>
              <TriText text={obj} size="sm" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}