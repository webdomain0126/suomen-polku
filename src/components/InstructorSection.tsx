import { useTranslations } from "next-intl";
import Button from "./Button";

export default function InstructorSection() {
  const t = useTranslations("instructor");

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-center">
        <div className="relative aspect-[4/5] bg-spruce-dark border border-line flex flex-col items-center justify-center gap-4 p-8 text-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 15%, rgba(62,101,119,0.28), transparent 55%), radial-gradient(circle at 85% 90%, rgba(156,59,52,0.18), transparent 50%)",
            }}
          />
          <div className="relative z-10 w-19 h-19 rounded-full border border-paper/55 flex items-center justify-center font-serif text-3xl text-paper">
            R
          </div>
          <div className="relative z-10 font-serif text-paper text-[1rem]">
            {t("role")}
          </div>
        </div>

        <div>
          <span className="text-lake-dark font-semibold text-[0.92rem] mb-1.5 block">
            {t("kicker")}
          </span>
          <h2 className="mb-4">{t("heading")}</h2>
          <p className="text-ink/70 mb-5">{t("bio")}</p>
          <div className="pt-5 border-t border-line font-serif text-[1.1rem] text-spruce-dark italic max-w-[52ch]">
            {t("quote")}
            <span className="block mt-2 font-sans not-italic text-[0.85rem] text-ink/62 font-semibold">
              {t("quoteAttribution")}
            </span>
          </div>
          <div className="mt-5">
            <Button href="/about" variant="outline">{t("cta")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}