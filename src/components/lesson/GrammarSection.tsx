import { useTranslations } from "next-intl";
import { Lesson } from "@/lessons/types";
import TriText from "./TriText";

export default function GrammarSection({ lesson }: { lesson: Lesson }) {
  const t = useTranslations("lessonPage");

  return (
    <section className="px-6 pb-8 bg-birch py-10">
      <div className="max-w-[840px] mx-auto">
        <h2 className="text-[1.2rem] mb-5">{t("grammarHeading")}</h2>

        <div className="space-y-5 mb-8">
          {lesson.explanation.map((para, i) => (
            <TriText key={i} text={para} />
          ))}
        </div>

        {lesson.pronounTable && (
          <div className="border border-line bg-snow overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[420px]">
              <thead>
                <tr className="border-b border-line">
                  <th className="p-3 text-[0.85rem] font-semibold text-spruce-dark">
                    {t("tableFinnish")}
                  </th>
                  <th className="p-3 text-[0.85rem] font-semibold text-spruce-dark">
                    {t("tableEnglish")}
                  </th>
                  <th className="p-3 text-[0.85rem] font-semibold text-spruce-dark">
                    {t("tableBangla")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {lesson.pronounTable.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 1 ? "bg-birch/50" : undefined}
                  >
                    <td className="p-3 font-serif text-spruce-dark">
                      {row.fi}
                    </td>
                    <td className="p-3 text-ink/80 text-[0.95rem]">
                      {row.en}
                    </td>
                    <td className="p-3 text-ink/80 text-[0.95rem]">
                      {row.bn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}