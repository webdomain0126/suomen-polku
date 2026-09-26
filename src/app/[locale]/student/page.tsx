import { setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { getSessionUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getLessonIdsForMonth } from "@/lessons/lessonRegistry";
import StudentNav from "@/components/StudentNav";
import WelcomeSection from "@/components/WelcomeSection";
import CourseOverview from "@/components/CourseOverview";
import ProgressOverview from "@/components/ProgressOverview";
import MonthCards from "@/components/MonthCards";

const TOTAL_MONTHS = 10;

type MonthStatus = "notStarted" | "inProgress" | "completed";

export default async function StudentDashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // ---- Protection: never trust the client, only the session cookie ----
  const userId = await getSessionUserId();
  if (!userId) {
    redirect({ href: "/login", locale });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId! },
    select: { id: true, name: true },
  });

  // Session referred to a user that no longer exists (e.g. deleted account)
  if (!user) {
    redirect({ href: "/login", locale });
  }

  // All progress is queried by the session's own user id only.
  const [monthRows, lessonRows] = await Promise.all([
    prisma.monthProgress.findMany({
      where: { userId: userId! },
      select: { month: true, completed: true },
    }),
    prisma.lessonProgress.findMany({
      where: { userId: userId!, completed: true },
      select: { lessonId: true },
    }),
  ]);

  const completedMonths = new Set(
    monthRows
      .filter((row: { month: number; completed: boolean }) => row.completed)
      .map((row: { month: number; completed: boolean }) => row.month)
  );
  const completedLessons = new Set(
    lessonRows.map((row: { lessonId: string }) => row.lessonId)
  );

  const statuses: MonthStatus[] = Array.from({ length: TOTAL_MONTHS }, (_, i) => {
    const month = i + 1;
    const lessonIds = getLessonIdsForMonth(month);

    // Months with registered lessons: status comes from lesson progress.
    if (lessonIds.length > 0) {
      const done = lessonIds.filter((id) => completedLessons.has(id)).length;
      if (done === lessonIds.length) return "completed";
      if (done > 0) return "inProgress";
      return "notStarted";
    }

    // Months without lessons yet: keep the old month-level record.
    return completedMonths.has(month) ? "completed" : "notStarted";
  });

  const completedCount = statuses.filter((s) => s === "completed").length;

  return (
    <>
      <StudentNav />
      <WelcomeSection name={user!.name} />
      <CourseOverview />
      <ProgressOverview completedCount={completedCount} totalMonths={TOTAL_MONTHS} />
      <MonthCards statuses={statuses} />
    </>
  );
}