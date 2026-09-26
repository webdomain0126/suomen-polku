import { useTranslations } from "next-intl";
import Button from "./Button";

const tiers = [
  { key: "liveMonthly", href: "/register?plan=live-monthly", featured: false },
  { key: "lifetime", href: "/register?plan=lifetime", featured: false },
  { key: "fullLive", href: "/register?plan=full-live", featured: true },
] as const;

export default function PricingPreview() {
  const t = useTranslations("pricing");

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-10">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)]">{t("heading")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const features = t(`${tier.key}.features`).split(",");
            return (
              <div
                key={tier.key}
                className={`border p-7 flex flex-col ${
                  tier.featured ? "border-spruce-dark bg-spruce-dark text-paper" : "border-line bg-snow"
                }`}
              >
                <h3 className={`text-[1.15rem] mb-1 ${tier.featured ? "text-paper" : ""}`}>
                  {t(`${tier.key}.title`)}
                </h3>
                <div className={`font-serif text-[1.6rem] mb-5 ${tier.featured ? "text-paper" : "text-spruce-dark"}`}>
                  {t(`${tier.key}.price`)}
                </div>
                <ul className="space-y-2 mb-7 flex-1">
                  {features.map((f) => (
                    <li key={f} className={`text-[0.9rem] flex gap-2 items-start ${tier.featured ? "text-paper/85" : "text-ink/75"}`}>
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-none" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href={tier.href} variant={tier.featured ? "lingon" : "outline"}>
                  {t(`${tier.key}.cta`)}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}