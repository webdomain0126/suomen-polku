import { useTranslations } from "next-intl";
import { Lesson } from "@/lessons/types";
import TriText from "./TriText";

export default function LessonSummary({ lesson }: { lesson: Lesson }) {
  const t = useTranslations("lessonPage");

  return (
    <section className="px-6 py-10">
      <div className="max-w-[840px] mx-auto">
        <h2 className="text-[1.2rem] mb-5">{t("summaryHeading")}</h2>
        <div className="border border-line bg-snow p-5">
          <TriText text={lesson.summary} />
        </div>
      </div>
    </section>
  );
}