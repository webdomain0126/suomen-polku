import { useTranslations } from "next-intl";

export default function LearningMethod({
  namespace = "coursePage.learningMethod",
}: {
  namespace?: string;
}) {
  const t = useTranslations(namespace);

  return (
    <section className="py-20 px-6 bg-birch">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] mb-3">
            {t("heading")}
          </h2>
          <p className="text-ink/70">{t("description")}</p>
        </div>
        <div className="border border-line bg-snow p-7">
          <div className="mb-5 pb-5 border-b border-line">
            <span className="text-[0.78rem] text-lake-dark font-semibold block mb-1">
              {t("example.finnishLabel")}
            </span>
            <p className="font-serif text-[1.3rem] text-spruce-dark mb-0">
              {t("example.finnish")}
            </p>
          </div>
          <div className="mb-5 pb-5 border-b border-line">
            <span className="text-[0.78rem] text-lake-dark font-semibold block mb-1">
              {t("example.banglaLabel")}
            </span>
            <p className="text-[1.05rem] mb-0">{t("example.bangla")}</p>
          </div>
          <div>
            <span className="text-[0.78rem] text-lake-dark font-semibold block mb-1">
              {t("example.englishLabel")}
            </span>
            <p className="text-[0.95rem] text-ink/70 mb-0">
              {t("example.english")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}