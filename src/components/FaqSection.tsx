import { useTranslations } from "next-intl";

const qKeys = [
  "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10",
] as const;

export default function FaqSection() {
  const t = useTranslations("contactPage.faq");

  return (
    <section className="py-20 px-6 bg-birch">
      <div className="max-w-[820px] mx-auto">
        <div className="mb-8">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)]">
            {t("heading")}
          </h2>
        </div>
        <div className="border-t border-line">
          {qKeys.map((key) => (
            <details key={key} className="border-b border-line py-5 group">
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-serif text-[1.05rem] text-spruce-dark">
                {t(`${key}.q`)}
                <span className="flex-none text-lake-dark text-[1.2rem] leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[0.95rem] text-ink/75">
                {t(`${key}.a`)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}