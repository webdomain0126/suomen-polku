import { useTranslations } from "next-intl";
import { Lesson } from "@/lessons/types";

export default function ExamplesSection({ lesson }: { lesson: Lesson }) {
  const t = useTranslations("lessonPage");

  return (
    <section className="px-6 py-10">
      <div className="max-w-[840px] mx-auto">
        <h2 className="text-[1.2rem] mb-5">{t("examplesHeading")}</h2>
        <div className="space-y-4">
          {lesson.examples.map((ex, i) => (
            <div key={i} className="border border-line bg-snow p-4">
              <p className="font-serif text-[1.1rem] text-spruce-dark mb-1">
                {ex.fi}
              </p>
              <p className="text-[0.95rem] text-ink/80 mb-1">{ex.bn}</p>
              <p className="text-[0.9rem] text-ink/60 italic mb-0">{ex.en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}