import { useTranslations } from "next-intl";

export default function ProgressOverview({
  completedCount,
  totalMonths,
}: {
  completedCount: number;
  totalMonths: number;
}) {
  const t = useTranslations("studentPage");
  const percent = Math.round((completedCount / totalMonths) * 100);

  return (
    <section className="px-6 pb-6">
      <div className="max-w-[1180px] mx-auto border border-line bg-snow p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[1.05rem] mb-0">{t("progressHeading")}</h2>
          <span className="text-[0.9rem] font-semibold text-spruce-dark">
            {t("progressLabel", { completed: completedCount, total: totalMonths })}
          </span>
        </div>
        <div className="h-2.5 w-full bg-birch rounded-full overflow-hidden">
          <div
            className="h-full bg-lake rounded-full transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </section>
  );
}