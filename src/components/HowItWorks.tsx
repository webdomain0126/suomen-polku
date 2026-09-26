import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("coursePage.howItWorks");
  const items = t("items").split(",");

  return (
    <section className="py-16 px-6 bg-birch">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-8">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)]">
            {t("heading")}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {items.map((item, i) => (
            <span
              key={item}
              className="flex items-center gap-2 border border-line bg-snow px-4 py-2.5 text-[0.9rem] rounded-[3px]"
            >
              <span className="font-serif text-lake-dark text-[0.8rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}