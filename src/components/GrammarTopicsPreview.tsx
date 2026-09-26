import { useTranslations } from "next-intl";

export default function GrammarTopicsPreview() {
  const t = useTranslations("resourcesPage.grammarPreview");
  const topics = t("topics").split(",");

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-8">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] mb-3">
            {t("heading")}
          </h2>
          <p className="text-ink/70">{t("description")}</p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {topics.map((topic) => (
            <span
              key={topic}
              className="text-[0.86rem] px-3.5 py-2 bg-birch rounded-[3px] text-ink"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}