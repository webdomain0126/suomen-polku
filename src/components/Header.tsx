"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./Button";

const navItems = [
  { href: "/", key: "home" },
  { href: "/course", key: "course" },
  { href: "/resources", key: "resources" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default function Header() {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-sm border-b border-line">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 flex items-center justify-between py-4 gap-4">
        <Link
          href="/"
          className="font-serif text-[1.25rem] font-semibold text-spruce-dark flex items-center gap-2 flex-none"
        >
          <svg className="w-6 h-6 flex-none" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="#2C4A3E" strokeWidth="1.4" />
            <path
              d="M2 17.5C6 14 10 21 14 17.5C18 14 22 21 26 17.5"
              stroke="#4C7A8C"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <span className="whitespace-nowrap">Suomen Polku</span>
        </Link>

        <nav className="hidden lg:flex gap-6 flex-1 justify-center">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-[0.95rem] whitespace-nowrap ${
                  active ? "text-spruce-dark font-semibold" : "text-ink"
                }`}
              >
                {t(item.key)}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-lingon" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 flex-none">
          <LanguageSwitcher />
          <Link
            href="/login"
            className="hidden sm:inline text-[0.9rem] whitespace-nowrap"
          >
            {t("login")}
          </Link>
          <Button href="/register" variant="primary">
            {t("register")}
          </Button>
        </div>
      </div>

      <nav className="lg:hidden flex gap-4 overflow-x-auto px-6 pb-3 -mt-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.9rem] whitespace-nowrap ${
                active ? "text-spruce-dark font-semibold" : "text-ink/70"
              }`}
            >
              {t(item.key)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}