"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import PasswordField from "./PasswordField";

type Errors = {
  email?: string;
  password?: string;
  form?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm() {
  const t = useTranslations("authPage.login");
  const router = useRouter();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!values.email.trim()) {
      next.email = t("emailRequired");
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      next.email = t("emailInvalid");
    }
    if (!values.password) next.password = t("passwordRequired");
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.error === "INVALID_CREDENTIALS") {
          setErrors({ form: t("invalidCredentials") });
        } else {
          setErrors({ form: t("serverError") });
        }
        setIsSubmitting(false);
        return;
      }

      // Login succeeded: the server has set the HTTP-only session cookie.
      // Send the student to their dashboard. The next-intl router keeps
      // the current locale (/fi/opiskelija or /en/student).
      router.push("/student");
      router.refresh();
    } catch {
      setErrors({ form: t("serverError") });
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-[440px] mx-auto px-6 py-16">
      <span className="text-[0.92rem] text-lake-dark font-semibold mb-2 block text-center">
        {t("kicker")}
      </span>
      <h1 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-medium mb-3 text-center">
        {t("heading")}
      </h1>
      <p className="text-ink/70 text-center mb-8">{t("description")}</p>

      <form
        noValidate
        onSubmit={handleSubmit}
        className="border border-line bg-snow p-7"
      >
        {errors.form && (
          <p className="text-lingon text-[0.88rem] mb-5 text-center">
            {errors.form}
          </p>
        )}

        <div className="mb-5">
          <label
            htmlFor="login-email"
            className="block text-[0.88rem] font-semibold mb-2 text-spruce-dark"
          >
            {t("emailLabel")}
          </label>
          <input
            id="login-email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder={t("emailPlaceholder")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "login-email-error" : undefined}
            className="w-full border border-line bg-paper px-3.5 py-2.5 text-[0.96rem] rounded-[3px] focus:outline-none focus:ring-2 focus:ring-lake"
          />
          {errors.email && (
            <p id="login-email-error" className="text-lingon text-[0.82rem] mt-1.5">
              {errors.email}
            </p>
          )}
        </div>

        <PasswordField
          id="login-password"
          label={t("passwordLabel")}
          placeholder={t("passwordPlaceholder")}
          value={values.password}
          onChange={(v) => setValues({ ...values, password: v })}
          error={errors.password}
          showLabel={t("showPassword")}
          hideLabel={t("hidePassword")}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-6 py-3 text-[0.96rem] font-semibold rounded-[3px] transition-colors bg-spruce-dark text-paper hover:bg-spruce disabled:opacity-60 mb-4"
        >
          {t("submit")}
        </button>

        <p className="text-[0.9rem] text-ink/70 text-center">
          {t("noAccount")}{" "}
          <Link href="/register" className="text-lake-dark font-semibold">
            {t("registerLink")}
          </Link>
        </p>
      </form>
    </div>
  );
}