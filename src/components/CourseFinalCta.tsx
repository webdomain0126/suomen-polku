import { useTranslations } from "next-intl";
import Button from "./Button";

export default function CourseFinalCta({
  namespace = "coursePage.finalCta",
  secondaryHref = "/resources",
}: {
  namespace?: string;
  secondaryHref?: string;
}) {
  const t = useTranslations(namespace);

  return (
    <section className="bg-spruce-dark text-paper py-16 px-6 text-center">
      <div className="max-w-[640px] mx-auto">
        <h2 className="text-paper mb-3">{t("heading")}</h2>
        <p className="text-paper/72 mb-7">{t("description")}</p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Button href="/register" variant="lingon">
            {t("ctaRegister")}
          </Button>
          <Button href={secondaryHref} variant="ghost-light">
            {t("ctaSecondary")}
          </Button>
        </div>
      </div>
    </section>
  );
}