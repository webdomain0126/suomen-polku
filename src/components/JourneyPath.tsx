import { useTranslations } from "next-intl";

export default function JourneyPath() {
  const t = useTranslations("journey");
  const stepKeys = [
    "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10",
  ] as const;

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-10">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] mb-3">
            {t("heading")}
          </h2>
          <p className="text-ink/70">{t("description")}</p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-line bg-snow">
          {stepKeys.map((key, i) => (
            <li
              key={key}
              className="p-5 border-b lg:border-b-0 border-r-0 lg:border-r border-line last:border-0"
            >
              <span className="block font-serif text-lake-dark text-[0.85rem] mb-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.95rem] font-semibold text-spruce-dark">
                {t(`steps.${key}`)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}