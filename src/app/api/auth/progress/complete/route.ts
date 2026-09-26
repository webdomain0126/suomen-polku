import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUserId } from "@/lib/auth";
import { getLessonMeta, getLessonIdsForMonth } from "@/lessons/lessonRegistry";

export async function POST(req: NextRequest) {
  // Only the session cookie decides who this request is for. The
  // request body is never allowed to specify a userId.
  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json({ error: "UNAUTHENTICATED" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "INVALID_BODY" }, { status: 400 });
  }

  const { lessonId } = (body ?? {}) as { lessonId?: unknown };

  // Only accept lesson IDs that exist in the lesson registry.
  if (typeof lessonId !== "string") {
    return NextResponse.json({ error: "INVALID_LESSON" }, { status: 400 });
  }
  const lesson = getLessonMeta(lessonId);
  if (!lesson) {
    return NextResponse.json({ error: "INVALID_LESSON" }, { status: 400 });
  }

  try {
    const now = new Date();

    // Upsert = one record per user per lesson. Clicking again
    // updates the same record instead of creating a duplicate.
    // completedAt keeps the date of the first completion.
    const lessonProgress = await prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      update: { completed: true },
      create: { userId, lessonId, completed: true, completedAt: now },
      select: { lessonId: true, completed: true, completedAt: true },
    });

    // Keep month-level progress working for the dashboard:
    // the month is complete only when ALL its lessons are complete.
    const monthLessonIds = getLessonIdsForMonth(lesson.month);
    const completedCount = await prisma.lessonProgress.count({
      where: { userId, lessonId: { in: monthLessonIds }, completed: true },
    });
    const monthCompleted = completedCount === monthLessonIds.length;

    if (monthCompleted) {
      await prisma.monthProgress.upsert({
        where: { userId_month: { userId, month: lesson.month } },
        update: { completed: true },
        create: { userId, month: lesson.month, completed: true, completedAt: now },
      });
    }

    return NextResponse.json({ lessonProgress, monthCompleted });
  } catch (err) {
    console.error("Failed to update progress:", err);
    return NextResponse.json({ error: "SERVER_ERROR" }, { status: 500 });
  }
}