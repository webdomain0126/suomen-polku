"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Lesson } from "@/lessons/types";

export default function QuizSection({ lesson }: { lesson: Lesson }) {
  const t = useTranslations("lessonPage");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  function selectAnswer(qIndex: number, optionIndex: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleRetry() {
    setAnswers({});
    setSubmitted(false);
  }

  const score = lesson.quiz.reduce(
    (acc, q, i) => (answers[i] === q.correctIndex ? acc + 1 : acc),
    0
  );
  const allAnswered = lesson.quiz.every((_, i) => answers[i] !== undefined);

  return (
    <section className="px-6 py-10 bg-birch">
      <div className="max-w-[840px] mx-auto">
        <h2 className="text-[1.2rem] mb-5">{t("quizHeading")}</h2>

        <div className="space-y-6">
          {lesson.quiz.map((q, qi) => {
            const selected = answers[qi];
            return (
              <div key={qi} className="border border-line bg-snow p-5">
                <p className="font-serif text-[1.05rem] text-spruce-dark mb-1">
                  {q.question.fi}
                </p>
                <p className="text-[0.85rem] text-ink/55 italic mb-4">
                  {q.question.en}
                </p>

                <div className="space-y-2">
                  {q.options.map((opt, oi) => {
                    const isSelected = selected === oi;
                    const isCorrect = oi === q.correctIndex;
                    let stateClasses = "border-line bg-paper";
                    if (submitted && isSelected && isCorrect) {
                      stateClasses = "border-spruce-dark bg-birch";
                    } else if (submitted && isSelected && !isCorrect) {
                      stateClasses = "border-lingon bg-lingon/10";
                    } else if (submitted && isCorrect) {
                      stateClasses = "border-spruce-dark bg-birch";
                    } else if (isSelected) {
                      stateClasses = "border-lake bg-lake/10";
                    }

                    return (
                      <button
                        key={oi}
                        type="button"
                        onClick={() => selectAnswer(qi, oi)}
                        disabled={submitted}
                        className={`w-full text-left border px-4 py-2.5 text-[0.92rem] rounded-[3px] transition-colors ${stateClasses}`}
                      >
                        {opt.fi}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <p className="text-[0.85rem] text-ink/70 mt-3 pt-3 border-t border-line">
                    {q.explanation.fi} — {q.explanation.en}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-4 flex-wrap">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="inline-flex items-center justify-center px-6 py-3 text-[0.96rem] font-semibold rounded-[3px] bg-spruce-dark text-paper hover:bg-spruce disabled:opacity-50"
            >
              {t("submitQuiz")}
            </button>
          ) : (
            <>
              <span className="text-[1rem] font-semibold text-spruce-dark">
                {t("quizScore", { score, total: lesson.quiz.length })}
              </span>
              <button
                type="button"
                onClick={handleRetry}
                className="text-[0.9rem] font-semibold text-lake-dark hover:underline"
              >
                {t("retryQuiz")}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}