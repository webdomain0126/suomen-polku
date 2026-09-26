import { useTranslations } from "next-intl";
import Button from "./Button";

export default function CourseHero() {
  const t = useTranslations("coursePage.hero");

  return (
    <section className="pt-14 pb-10 px-6">
      <div className="max-w-[780px] mx-auto text-center">
        <span className="text-[0.92rem] text-lake-dark font-semibold mb-3 block">
          {t("kicker")}
        </span>
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-medium mb-5">
          {t("heading")}
        </h1>
        <p className="max-w-[58ch] mx-auto text-ink/70 mb-8">
          {t("description")}
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Button href="/register" variant="primary">
            {t("ctaPrimary")}
          </Button>
          <a href="#curriculum" className="inline-flex items-center justify-center px-6 py-3 text-[0.96rem] font-semibold rounded-[3px] transition-colors whitespace-nowrap border border-ink text-ink hover:bg-ink hover:text-paper bg-transparent">
            {t("ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}