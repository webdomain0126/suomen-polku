"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="inline-flex items-center gap-1 border border-line rounded-full p-1 text-sm bg-snow"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => handleChange(loc)}
            aria-pressed={active}
            aria-label={t(loc)}
            className={`px-3 py-1.5 rounded-full font-medium transition-colors whitespace-nowrap ${
              active ? "bg-spruce-dark text-paper" : "text-ink/70 hover:bg-birch"
            }`}
          >
            {loc === "fi" ? "🇫🇮" : "🇬🇧"} {t(loc)}
          </button>
        );
      })}
    </div>
  );
}