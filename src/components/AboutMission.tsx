import { useTranslations } from "next-intl";

export default function AboutMission() {
  const t = useTranslations("aboutPage.mission");
  const focusAreas = t("focusList").split(",");

  return (
    <section className="pt-14 pb-16 px-6">
      <div className="max-w-[860px] mx-auto text-center">
        <span className="text-[0.92rem] text-lake-dark font-semibold mb-3 block">
          {t("kicker")}
        </span>
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-medium mb-5">
          {t("heading")}
        </h1>
        <p className="max-w-[58ch] mx-auto text-ink/70 mb-8">
          {t("paragraph")}
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="text-[0.86rem] px-3.5 py-2 bg-birch rounded-[3px] text-ink"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}