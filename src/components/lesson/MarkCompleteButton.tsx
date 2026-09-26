"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export default function MarkCompleteButton({
  lessonId,
  initialCompleted,
}: {
  lessonId: string;
  initialCompleted: boolean;
}) {
  const t = useTranslations("lessonPage");
  const router = useRouter();
  const [completed, setCompleted] = useState(initialCompleted);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleMarkComplete() {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/auth/progress/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId }),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      setCompleted(true);
      router.refresh();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-6 pb-16">
      <div className="max-w-[840px] mx-auto border border-line bg-birch p-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-[1.05rem] mb-1">{t("markCompleteHeading")}</h3>
          <p className="text-[0.9rem] text-ink/70 mb-0">
            {completed ? t("alreadyCompleted") : t("markCompleteDescription")}
          </p>
          {error && (
            <p className="text-[0.85rem] text-lingon mt-2">
              {t("markCompleteError")}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={handleMarkComplete}
          disabled={completed || loading}
          className="inline-flex items-center justify-center px-6 py-3 text-[0.96rem] font-semibold rounded-[3px] bg-spruce-dark text-paper hover:bg-spruce disabled:opacity-60 flex-none"
        >
          {completed ? t("completedLabel") : t("markCompleteButton")}
        </button>
      </div>
    </section>
  );
}