import { setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { getSessionUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getLesson } from "@/lessons";
import StudentNav from "@/components/StudentNav";
import LessonHeader from "@/components/lesson/LessonHeader";
import GrammarSection from "@/components/lesson/GrammarSection";
import ExamplesSection from "@/components/lesson/ExamplesSection";
import VocabularySection from "@/components/lesson/VocabularySection";
import PronunciationSection from "@/components/lesson/PronunciationSection";
import CommonMistakesSection from "@/components/lesson/CommonMistakesSection";
import PracticeSection from "@/components/lesson/PracticeSection";
import QuizSection from "@/components/lesson/QuizSection";
import LessonSummary from "@/components/lesson/LessonSummary";
import MarkCompleteButton from "@/components/lesson/MarkCompleteButton";

const MONTH = 1;
const SLUG = "verb-types-1-2";
// Stable ID from src/lessons/lessonRegistry.ts, the same for /fi and /en.
const LESSON_ID = "month-1-verb-types-1-2";

export default async function VerbTypes12LessonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // ---- Protection: same session-cookie check used everywhere else ----
  const userId = await getSessionUserId();
  if (!userId) {
    redirect({ href: "/login", locale });
  }

  const lesson = getLesson(MONTH, SLUG);
  if (!lesson) {
    redirect({ href: "/student", locale });
    return null;
  }

  // Lesson completion is always read for the session's own user,
  // never from any client-supplied id.
  const progress = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId: userId!, lessonId: LESSON_ID } },
    select: { completed: true },
  });

  return (
    <>
      <StudentNav />
      <LessonHeader lesson={lesson} />
      <GrammarSection lesson={lesson} />
      <ExamplesSection lesson={lesson} />
      <VocabularySection lesson={lesson} />
      <PronunciationSection lesson={lesson} />
      <CommonMistakesSection lesson={lesson} />
      <PracticeSection lesson={lesson} />
      <QuizSection lesson={lesson} />
      <LessonSummary lesson={lesson} />
      <MarkCompleteButton
        lessonId={LESSON_ID}
        initialCompleted={Boolean(progress?.completed)}
      />
    </>
  );
}