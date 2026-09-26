import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("contactPage.info");
  const items = t("items").split(",");

  return (
    <div className="border border-line bg-birch p-7">
      <h3 className="text-[1.1rem] mb-4">{t("heading")}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[0.95rem] text-ink/80"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lake flex-none" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}