import { useTranslations } from "next-intl";
import Button from "./Button";

export default function FinalCta() {
  const t = useTranslations("finalCta");

  return (
    <section className="bg-spruce-dark text-paper py-16 px-6 text-center">
      <div className="max-w-[640px] mx-auto">
        <h2 className="text-paper mb-3">{t("heading")}</h2>
        <p className="text-paper/72 mb-7">{t("description")}</p>
        <Button href="/register" variant="lingon">{t("cta")}</Button>
      </div>
    </section>
  );
}