"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";

export default function LogoutButton({ label }: { label: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      router.push("/login");
      router.refresh();
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="text-[0.92rem] font-semibold text-lingon hover:underline disabled:opacity-60"
    >
      {label}
    </button>
  );
}