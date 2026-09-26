import { useTranslations } from "next-intl";
import { Lesson } from "@/lessons/types";
import TriText from "./TriText";

export default function CommonMistakesSection({ lesson }: { lesson: Lesson }) {
  const t = useTranslations("lessonPage");

  return (
    <section className="px-6 py-10 bg-birch">
      <div className="max-w-[840px] mx-auto">
        <h2 className="text-[1.2rem] mb-5">{t("mistakesHeading")}</h2>
        <ul className="space-y-4">
          {lesson.commonMistakes.map((mistake, i) => (
            <li key={i} className="border border-line bg-snow p-4 flex gap-3">
              <span className="text-lingon font-serif text-[1.1rem] flex-none">
                !
              </span>
              <TriText text={mistake} size="sm" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}