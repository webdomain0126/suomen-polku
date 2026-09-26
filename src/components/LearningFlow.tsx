import { useTranslations } from "next-intl";

export default function LearningFlow({
  namespace = "resourcesPage.learningFlow",
}: {
  namespace?: string;
}) {
  const t = useTranslations(namespace);
  const steps = t("steps").split(",");

  return (
    <section className="py-20 px-6 bg-birch">
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
        <div className="flex flex-wrap items-center gap-0">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="border border-line bg-snow px-5 py-4 text-center min-w-[110px]">
                <span className="font-serif text-lake-dark text-[0.8rem] block mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.92rem] font-semibold text-spruce-dark">
                  {step}
                </span>
              </div>
              {i !== steps.length - 1 && (
                <span className="text-ink/40 px-3 text-lg">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}