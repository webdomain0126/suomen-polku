import { useTranslations } from "next-intl";

export default function CourseOverview() {
  const t = useTranslations("courseOverview");

  const items = [
    { value: t("duration"), label: t("durationLabel") },
    { value: t("frequency"), label: t("frequencyLabel") },
    { value: t("length"), label: t("lengthLabel") },
    { value: t("price"), label: t("priceLabel") },
    { value: t("platform"), label: t("platformLabel") },
  ];

  return (
    <section className="bg-spruce-dark text-paper">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <div key={i}>
            <b className="block font-serif text-[1.3rem] text-paper">
              {item.value}
            </b>
            <span className="text-[0.82rem] text-paper/65">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}