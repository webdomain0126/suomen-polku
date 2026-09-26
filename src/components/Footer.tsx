import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("navigation");

  return (
    <footer className="bg-spruce-dark text-paper/82 pt-14 pb-6">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="font-serif text-[1.2rem] text-paper mb-3">
              Suomen Polku
            </div>
            <p className="max-w-[32ch] text-[0.92rem] text-paper/72">
              {t("tagline")}
            </p>
          </div>
          <div>
            <h4 className="text-paper text-[0.9rem] font-semibold mb-3">
              {t("siteHeading")}
            </h4>
            <ul className="space-y-2 text-[0.9rem]">
              <li><Link href="/" className="hover:text-paper">{nav("home")}</Link></li>
              <li><Link href="/course" className="hover:text-paper">{nav("course")}</Link></li>
              <li><Link href="/resources" className="hover:text-paper">{nav("resources")}</Link></li>
              <li><Link href="/about" className="hover:text-paper">{nav("about")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-paper text-[0.9rem] font-semibold mb-3">
              {t("supportHeading")}
            </h4>
            <ul className="space-y-2 text-[0.9rem]">
              <li><Link href="/contact" className="hover:text-paper">{nav("contact")}</Link></li>
              <li><Link href="/contact" className="hover:text-paper">{t("faq")}</Link></li>
              <li><Link href="/register" className="hover:text-paper">{nav("register")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="h-px bg-paper/14" />
        <div className="pt-5 text-[0.82rem] text-paper/55">
          &copy; 2026 Suomen Polku. {t("rights")}
        </div>
      </div>
    </footer>
  );
}