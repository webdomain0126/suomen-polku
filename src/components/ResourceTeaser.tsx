import { useTranslations } from "next-intl";
import Button from "./Button";

export default function ResourceTeaser() {
  const t = useTranslations("resourcesTeaser");
  const chips = t("chips").split(",");

  return (
    <section className="py-20 px-6 bg-birch">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-7">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] mb-3">{t("heading")}</h2>
          <p className="text-ink/70">{t("description")}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {chips.map((chip) => (
            <span key={chip} className="border border-line bg-snow px-4 py-2 text-[0.9rem] rounded-[3px]">
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <Button href="/resources" variant="outline">{t("cta")}</Button>
        </div>
      </div>
    </section>
  );
}