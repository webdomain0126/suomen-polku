import { useTranslations } from "next-intl";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="flex-none mt-0.5 text-lake-dark"
    >
      <path
        d="M3 9.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WhatYouGet() {
  const t = useTranslations("coursePage.whatYouGet");
  const items = t("items").split(",");

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[640px] mb-10">
          <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block">
            {t("kicker")}
          </span>
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)]">
            {t("heading")}
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 items-start text-[0.96rem]">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}