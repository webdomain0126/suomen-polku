import { useTranslations } from "next-intl";

const cards = [
  { key: "foundations", icon: <path d="M4 4h11a3 3 0 013 3v13H7a3 3 0 01-3-3V4zM8 9h6M8 13h6" stroke="currentColor" strokeWidth="1.5" /> },
  { key: "grammar", icon: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.5" /> },
  { key: "communication", icon: <path d="M21 11.5a7.5 7.5 0 01-11.6 6.3L4 19l1.2-5.4A7.5 7.5 0 1121 11.5z" stroke="currentColor" strokeWidth="1.5" /> },
  { key: "practical", icon: <path d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-6h4v6" stroke="currentColor" strokeWidth="1.5" /> },
] as const;

export default function FeatureGrid() {
  const t = useTranslations("features");

  return (
    <section className="py-20 px-6 bg-birch">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-10">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)]">{t("heading")}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {cards.map((card) => (
            <div key={card.key} className="bg-snow p-7">
              <div className="w-11 h-11 rounded-full bg-birch text-spruce-dark flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-5.5 h-5.5">
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-[1.1rem] mb-2">{t(`${card.key}.title`)}</h3>
              <p className="text-[0.92rem] text-ink/70 mb-0">{t(`${card.key}.items`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}