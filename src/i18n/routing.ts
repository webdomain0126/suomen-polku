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
    "/student/course/month-1/olla-basic-sentences": {
      fi: "/opiskelija/kurssi/kuukausi-1/olla-ja-peruslauseet",
      en: "/student/course/month-1/olla-basic-sentences",
    },
    "/student/course/month-1/present-tense": {
      fi: "/opiskelija/kurssi/kuukausi-1/preesens",
      en: "/student/course/month-1/present-tense",
    },
    "/student/course/month-1/verb-types-1-2": {
      fi: "/opiskelija/kurssi/kuukausi-1/verbityypit-1-2",
      en: "/student/course/month-1/verb-types-1-2",
    },
    "/student/course/month-1/verb-type-3": {
      fi: "/opiskelija/kurssi/kuukausi-1/verbityyppi-3",
      en: "/student/course/month-1/verb-type-3",
    },
    "/student/course/month-1/verb-type-4": {
      fi: "/opiskelija/kurssi/kuukausi-1/verbityyppi-4",
      en: "/student/course/month-1/verb-type-4",
    },
    "/student/course/month-1/verb-type-5": {
      fi: "/opiskelija/kurssi/kuukausi-1/verbityyppi-5",
      en: "/student/course/month-1/verb-type-5",
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];