import { useTranslations } from "next-intl";

const monthKeys = [
  "m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10",
] as const;

export default function CurriculumSection() {
  const t = useTranslations("coursePage.curriculum");

  return (
    <section id="curriculum" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-12">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.7rem,2.6vw,2.35rem)] mb-3">
            {t("heading")}
          </h2>
          <p className="text-ink/70">{t("description")}</p>
        </div>

        <div className="flex flex-col">
          {monthKeys.map((key, i) => {
            const topics = t(`months.${key}.topics`).split(",");
            return (
              <div
                key={key}
                className={`grid grid-cols-1 md:grid-cols-[90px_1fr] gap-6 py-8 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <div className="font-serif text-[2rem] text-lake-dark/70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[1.2rem] mb-1.5">
                    {t(`months.${key}.title`)}
                  </h3>
                  <p className="text-[0.95rem] text-ink/70 mb-4">
                    {t(`months.${key}.desc`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-[0.82rem] px-3 py-1.5 bg-birch rounded-[3px] text-ink"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}