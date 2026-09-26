import { useTranslations } from "next-intl";

export default function WelcomeSection({ name }: { name: string }) {
  const t = useTranslations("studentPage");

  return (
    <section className="pt-12 pb-6 px-6">
      <div className="max-w-[1180px] mx-auto">
        <h1 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium">
          {t("welcome", { name })}
        </h1>
      </div>
    </section>
  );
}