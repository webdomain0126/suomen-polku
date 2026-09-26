"use client";

import { useState } from "react";

export default function PasswordField({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  showLabel,
  hideLabel,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  showLabel: string;
  hideLabel: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block text-[0.88rem] font-semibold mb-2 text-spruce-dark"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="w-full border border-line bg-paper px-3.5 py-2.5 pr-12 text-[0.96rem] rounded-[3px] focus:outline-none focus:ring-2 focus:ring-lake"
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? hideLabel : showLabel}
          aria-pressed={visible}
          className="absolute right-0 top-0 bottom-0 px-3 flex items-center text-ink/50 hover:text-ink"
        >
          {visible ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 5.1A9.8 9.8 0 0112 5c5 0 9 4 10 7-.4 1.2-1.2 2.6-2.3 3.9M6.5 6.6C4.4 8 2.9 10 2 12c1 3 5 7 10 7 1.3 0 2.5-.2 3.6-.7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          )}
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} className="text-lingon text-[0.82rem] mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}