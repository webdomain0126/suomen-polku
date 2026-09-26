import { useTranslations } from "next-intl";

export default function ContactHero() {
  const t = useTranslations("contactPage.hero");

  return (
    <section className="pt-14 pb-10 px-6">
      <div className="max-w-[780px] mx-auto text-center">
        <span className="text-[0.92rem] text-lake-dark font-semibold mb-3 block">
          {t("kicker")}
        </span>
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-medium mb-5">
          {t("heading")}
        </h1>
        <p className="max-w-[58ch] mx-auto text-ink/70">
          {t("description")}
        </p>
      </div>
    </section>
  );
}