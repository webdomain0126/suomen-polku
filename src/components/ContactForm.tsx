"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const t = useTranslations("contactPage.form");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = t("nameRequired");
    if (!values.email.trim()) {
      next.email = t("emailRequired");
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      next.email = t("emailInvalid");
    }
    if (!values.message.trim()) next.message = t("messageRequired");
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-line bg-snow p-7"
    >
      <div className="mb-5">
        <label
          htmlFor="contact-name"
          className="block text-[0.88rem] font-semibold mb-2 text-spruce-dark"
        >
          {t("nameLabel")}
        </label>
        <input
          id="contact-name"
          type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          placeholder={t("namePlaceholder")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="w-full border border-line bg-paper px-3.5 py-2.5 text-[0.96rem] rounded-[3px] focus:outline-none focus:ring-2 focus:ring-lake"
        />
        {errors.name && (
          <p id="contact-name-error" className="text-lingon text-[0.82rem] mt-1.5">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="contact-email"
          className="block text-[0.88rem] font-semibold mb-2 text-spruce-dark"
        >
          {t("emailLabel")}
        </label>
        <input
          id="contact-email"
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          placeholder={t("emailPlaceholder")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="w-full border border-line bg-paper px-3.5 py-2.5 text-[0.96rem] rounded-[3px] focus:outline-none focus:ring-2 focus:ring-lake"
        />
        {errors.email && (
          <p id="contact-email-error" className="text-lingon text-[0.82rem] mt-1.5">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="contact-message"
          className="block text-[0.88rem] font-semibold mb-2 text-spruce-dark"
        >
          {t("messageLabel")}
        </label>
        <textarea
          id="contact-message"
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder={t("messagePlaceholder")}
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className="w-full border border-line bg-paper px-3.5 py-2.5 text-[0.96rem] rounded-[3px] focus:outline-none focus:ring-2 focus:ring-lake resize-y"
        />
        {errors.message && (
          <p
            id="contact-message-error"
            className="text-lingon text-[0.82rem] mt-1.5"
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center px-6 py-3 text-[0.96rem] font-semibold rounded-[3px] transition-colors bg-spruce-dark text-paper hover:bg-spruce"
      >
        {t("submit")}
      </button>

      {submitted && (
        <p className="mt-4 text-[0.85rem] text-ink/60 italic">
          {t("demoNotice")}
        </p>
      )}
    </form>
  );
}