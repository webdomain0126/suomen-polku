import { useTranslations } from "next-intl";
import Button from "./Button";

export default function CourseConnection() {
  const t = useTranslations("resourcesPage.courseConnection");
  const steps = t("steps").split(",");

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-8">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] mb-3">
            {t("heading")}
          </h2>
          <p className="text-ink/70">{t("description")}</p>
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          {steps.map((step, i) => (
            <span
              key={step}
              className="flex items-center gap-2 border border-line bg-snow px-4 py-2.5 text-[0.9rem] rounded-[3px]"
            >
              <span className="font-serif text-lake-dark text-[0.8rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {step}
            </span>
          ))}
        </div>
        <Button href="/course" variant="outline">
          {t("cta")}
        </Button>
      </div>
    </section>
  );
}