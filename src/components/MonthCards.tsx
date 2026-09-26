import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type MonthStatus = "notStarted" | "inProgress" | "completed";

const monthKeys = [
  "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10",
] as const;

const statusStyles: Record<MonthStatus, string> = {
  notStarted: "bg-birch text-ink/70",
  inProgress: "bg-lake text-paper",
  completed: "bg-spruce-dark text-paper",
};

// Months that already have a lesson-list page. Only Month 1 for now.
const MONTH_LINKS: Record<number, "/student/course/month-1"> = {
  1: "/student/course/month-1",
};

export default function MonthCards({
  statuses,
}: {
  statuses: MonthStatus[];
}) {
  const t = useTranslations("studentPage");
  const journey = useTranslations("journey.steps");

  const statusLabel: Record<MonthStatus, string> = {
    notStarted: t("statusNotStarted"),
    inProgress: t("statusInProgress"),
    completed: t("statusCompleted"),
  };

  return (
    <section className="px-6 pb-16">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="text-[1.15rem] mb-5">{t("monthsHeading")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {monthKeys.map((key, i) => {
            const month = i + 1;
            const status = statuses[i] ?? "notStarted";
            const href = MONTH_LINKS[month];

            const content = (
              <>
                <span className="font-serif text-lake-dark text-[0.85rem]">
                  {String(month).padStart(2, "0")}
                </span>
                <h3 className="text-[0.98rem] leading-snug mb-0 flex-1">
                  {journey(key)}
                </h3>
                <span
                  className={`self-start text-[0.76rem] font-semibold px-2.5 py-1 rounded-full ${statusStyles[status]}`}
                >
                  {statusLabel[status]}
                </span>
                {href && (
                  <span className="text-[0.82rem] font-semibold text-lake-dark">
                    {t("viewLessons")} →
                  </span>
                )}
              </>
            );

            return href ? (
              <Link
                key={key}
                href={href}
                className="border border-line bg-snow p-5 flex flex-col gap-3 transition-colors hover:border-lake hover:bg-paper"
              >
                {content}
              </Link>
            ) : (
              <div
                key={key}
                className="border border-line bg-snow p-5 flex flex-col gap-3"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}