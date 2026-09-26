import { useTranslations } from "next-intl";
import Button from "./Button";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="pt-14 pb-10 px-6">
      <div className="max-w-[860px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-[0.85rem] text-lake-dark border border-line pl-2.5 pr-3.5 py-1.5 rounded-full mb-6 bg-snow">
          <span className="w-1.5 h-1.5 rounded-full bg-lingon" />
          {t("badge")}
        </span>
        <h1 className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-medium mb-4">
          {t("title")}
        </h1>
        <p className="text-[1.3rem] text-spruce-dark font-serif mb-4">
          {t("subtitle")}
        </p>
        <p className="max-w-[52ch] mx-auto text-ink/70 mb-8">
          {t("description")}
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Button href="/course" variant="primary">
            {t("ctaCourse")}
          </Button>
          <Button href="/register" variant="outline">
            {t("ctaRegister")}
          </Button>
        </div>
      </div>
    </section>
  );
}