import { useTranslations } from "next-intl";

const categoryKeys = [
  "grammar",
  "vocabulary",
  "pronunciation",
  "lectureSlides",
  "pdfMaterials",
  "exercises",
  "videoLessons",
] as const;

const icons: Record<(typeof categoryKeys)[number], React.ReactNode> = {
  grammar: (
    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.5" />
  ),
  vocabulary: (
    <path d="M5 4h14v16l-7-4-7 4V4z" stroke="currentColor" strokeWidth="1.5" />
  ),
  pronunciation: (
    <path d="M11 5 6 9H3v6h3l5 4V5zM15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  ),
  lectureSlides: (
    <path d="M3 4h18v13H3zM8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" />
  ),
  pdfMaterials: (
    <path d="M4 4h11a3 3 0 013 3v13H7a3 3 0 01-3-3V4zM8 9h6M8 13h6" stroke="currentColor" strokeWidth="1.5" />
  ),
  exercises: (
    <path d="M6 3h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 13h8M9 17h5" stroke="currentColor" strokeWidth="1.5" />
  ),
  videoLessons: (
    <path d="M4 5h13a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zM19 9l4-2v10l-4-2" stroke="currentColor" strokeWidth="1.5" />
  ),
};

export default function ResourceCategories() {
  const t = useTranslations("resourcesPage.categories");

  return (
    <section className="py-20 px-6 bg-birch">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-10">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)]">
            {t("heading")}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryKeys.map((key) => (
            <div key={key} className="bg-snow border border-line p-6 flex flex-col">
              <div className="w-11 h-11 rounded-full bg-birch text-spruce-dark flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-5.5 h-5.5">
                  {icons[key]}
                </svg>
              </div>
              <h3 className="text-[1.1rem] mb-2">{t(`${key}.title`)}</h3>
              <p className="text-[0.92rem] text-ink/70 flex-1 mb-4">
                {t(`${key}.desc`)}
              </p>
              <span className="text-[0.82rem] font-semibold text-lake-dark">
                {t("cta")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}