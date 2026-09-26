import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoutButton from "./LogoutButton";

export default function StudentNav() {
  const t = useTranslations("studentPage");

  return (
    <header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-sm border-b border-line">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 flex items-center justify-between py-4 gap-4">
        <Link
          href="/student"
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

        <nav className="hidden sm:flex gap-6 flex-1 justify-center">
          <Link href="/student" className="text-[0.95rem] font-semibold text-spruce-dark">
            {t("navDashboard")}
          </Link>
          <Link href="/course" className="text-[0.95rem] text-ink">
            {t("navCourse")}
          </Link>
        </nav>

        <div className="flex items-center gap-4 flex-none">
          <LanguageSwitcher />
          <LogoutButton label={t("navLogout")} />
        </div>
      </div>

      {/* Mobile nav row */}
      <nav className="sm:hidden flex gap-4 px-6 pb-3 -mt-1">
        <Link href="/student" className="text-[0.9rem] font-semibold text-spruce-dark">
          {t("navDashboard")}
        </Link>
        <Link href="/course" className="text-[0.9rem] text-ink/70">
          {t("navCourse")}
        </Link>
      </nav>
    </header>
  );
}