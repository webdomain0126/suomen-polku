"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import PasswordField from "./PasswordField";

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  form?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export default function RegisterForm() {
  const t = useTranslations("authPage.register");
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = t("nameRequired");
    if (!values.email.trim()) {
      next.email = t("emailRequired");
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      next.email = t("emailInvalid");
    }
    if (!values.password) {
      next.password = t("passwordRequired");
    } else if (values.password.length < MIN_PASSWORD_LENGTH) {
      next.password = t("passwordTooShort");
    }
    if (!values.confirmPassword) {
      next.confirmPassword = t("confirmRequired");
    } else if (values.password !== values.confirmPassword) {
      next.confirmPassword = t("passwordMismatch");
    }
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.error === "EMAIL_TAKEN") {
          setErrors({ email: t("emailTaken") });
        } else if (data.error === "VALIDATION_ERROR") {
          setErrors({ form: t("serverError") });
        } else {
          setErrors({ form: t("serverError") });
        }
        setIsSubmitting(false);
        return;
      }

      // Real account created and the server has set an HTTP-only session
      // cookie. There is no student dashboard yet (that's Phase 10), so
      // send the user back to the homepage.
      router.push("/");
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
            htmlFor="register-name"
            className="block text-[0.88rem] font-semibold mb-2 text-spruce-dark"
          >
            {t("nameLabel")}
          </label>
          <input
            id="register-name"
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            placeholder={t("namePlaceholder")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "register-name-error" : undefined}
            className="w-full border border-line bg-paper px-3.5 py-2.5 text-[0.96rem] rounded-[3px] focus:outline-none focus:ring-2 focus:ring-lake"
          />
          {errors.name && (
            <p id="register-name-error" className="text-lingon text-[0.82rem] mt-1.5">
              {errors.name}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="register-email"
            className="block text-[0.88rem] font-semibold mb-2 text-spruce-dark"
          >
            {t("emailLabel")}
          </label>
          <input
            id="register-email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder={t("emailPlaceholder")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "register-email-error" : undefined}
            className="w-full border border-line bg-paper px-3.5 py-2.5 text-[0.96rem] rounded-[3px] focus:outline-none focus:ring-2 focus:ring-lake"
          />
          {errors.email && (
            <p id="register-email-error" className="text-lingon text-[0.82rem] mt-1.5">
              {errors.email}
            </p>
          )}
        </div>

        <PasswordField
          id="register-password"
          label={t("passwordLabel")}
          placeholder={t("passwordPlaceholder")}
          value={values.password}
          onChange={(v) => setValues({ ...values, password: v })}
          error={errors.password}
          showLabel={t("showPassword")}
          hideLabel={t("hidePassword")}
        />
        {!errors.password && (
          <p className="text-[0.8rem] text-ink/55 -mt-4 mb-5">
            {t("passwordHint")}
          </p>
        )}

        <PasswordField
          id="register-confirm-password"
          label={t("confirmPasswordLabel")}
          placeholder={t("confirmPasswordPlaceholder")}
          value={values.confirmPassword}
          onChange={(v) => setValues({ ...values, confirmPassword: v })}
          error={errors.confirmPassword}
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
          {t("haveAccount")}{" "}
          <Link href="/login" className="text-lake-dark font-semibold">
            {t("loginLink")}
          </Link>
        </p>
      </form>
    </div>
  );
}