import { useTranslations } from "next-intl";
import { Lesson } from "@/lessons/types";

export default function VocabularySection({ lesson }: { lesson: Lesson }) {
  const t = useTranslations("lessonPage");

  return (
    <section className="px-6 py-10 bg-birch">
      <div className="max-w-[840px] mx-auto">
        <h2 className="text-[1.2rem] mb-5">{t("vocabularyHeading")}</h2>
        <div className="border border-line bg-snow overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[380px]">
            <thead>
              <tr className="border-b border-line">
                <th className="p-3 text-[0.85rem] font-semibold text-spruce-dark">
                  {t("tableFinnish")}
                </th>
                <th className="p-3 text-[0.85rem] font-semibold text-spruce-dark">
                  {t("tableBangla")}
                </th>
                <th className="p-3 text-[0.85rem] font-semibold text-spruce-dark">
                  {t("tableEnglish")}
                </th>
              </tr>
            </thead>
            <tbody>
              {lesson.vocabulary.map((item, i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-birch/50" : undefined}>
                  <td className="p-3 font-serif text-spruce-dark">
                    {item.fi}
                  </td>
                  <td className="p-3 text-ink/80 text-[0.95rem]">
                    {item.bn}
                  </td>
                  <td className="p-3 text-ink/60 italic text-[0.9rem]">
                    {item.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}