"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Lesson } from "@/lessons/types";

export default function PracticeSection({ lesson }: { lesson: Lesson }) {
  const t = useTranslations("lessonPage");
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  function reveal(i: number) {
    setRevealed((prev) => new Set(prev).add(i));
  }

  return (
    <section className="px-6 py-10">
      <div className="max-w-[840px] mx-auto">
        <h2 className="text-[1.2rem] mb-5">{t("practiceHeading")}</h2>
        <div className="space-y-4">
          {lesson.practice.map((item, i) => (
            <div key={i} className="border border-line bg-snow p-5">
              <p className="font-serif text-[1.05rem] text-spruce-dark mb-1">
                {item.prompt.fi}
              </p>
              {item.prompt.bn && (
                <p className="text-[0.9rem] text-ink/75 mb-1">
                  {item.prompt.bn}
                </p>
              )}
              <p className="text-[0.85rem] text-ink/55 italic mb-3">
                {item.prompt.en}
              </p>

              {revealed.has(i) ? (
                <div className="border-t border-line pt-3 mt-1">
                  <p className="text-[0.95rem] text-spruce-dark font-semibold mb-1">
                    {t("answerLabel")}: {item.answer}
                  </p>
                  {item.hint && (
                    <p className="text-[0.85rem] text-ink/60">
                      {item.hint.fi} · {item.hint.en}
                    </p>
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => reveal(i)}
                  className="text-[0.88rem] font-semibold text-lake-dark hover:underline"
                >
                  {t("showAnswer")}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}