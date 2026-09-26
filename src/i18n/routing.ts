import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Supported locales
  locales: ["fi", "en"],

  // Used when no locale matches
  defaultLocale: "fi",

  // Always show the locale prefix in the URL (/fi, /en)
  localePrefix: "always",

  // Localized URL segments. The key is the internal path (matches the
  // folder name under src/app/[locale]/), the value is what actually
  // shows in the browser's address bar per locale.
  pathnames: {
    "/": "/",
    "/course": {
      fi: "/kurssi",
      en: "/course",
    },
    "/resources": {
      fi: "/resurssit",
      en: "/resources",
    },
    "/about": {
      fi: "/tietoa",
      en: "/about",
    },
    "/contact": {
      fi: "/yhteystiedot",
      en: "/contact",
    },
    "/login": {
      fi: "/kirjaudu",
      en: "/login",
    },
    "/register": {
      fi: "/rekisteroidy",
      en: "/register",
    },
    "/student": {
      fi: "/opiskelija",
      en: "/student",
    },
    "/student/course/month-1": {
      fi: "/opiskelija/kurssi/kuukausi-1",
      en: "/student/course/month-1",
    },
    "/student/course/month-1/personal-pronouns": {
      fi: "/opiskelija/kurssi/kuukausi-1/henkilokohtaiset-pronominit",
      en: "/student/course/month-1/personal-pronouns",
    },
    "/student/course/month-1/finnish-alphabet-pronunciation": {
      fi: "/opiskelija/kurssi/kuukausi-1/suomen-aakkoset-ja-aantaminen",
      en: "/student/course/month-1/finnish-alphabet-pronunciation",
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];