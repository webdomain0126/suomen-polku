import { useTranslations } from "next-intl";

const keys = ["announcement", "liveClass", "material", "practice"] as const;

export default function NewsGrid() {
  const t = useTranslations("news");

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-10">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)]">{t("heading")}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {keys.map((key) => (
            <div key={key} className="bg-snow p-6">
              <span className="text-[0.76rem] text-lake-dark font-semibold mb-2 block">
                {t(`${key}.tag`)}
              </span>
              <h3 className="text-[1rem] mb-2">{t(`${key}.title`)}</h3>
              <p className="text-[0.9rem] text-ink/70 mb-0">{t(`${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}