"use client";

import {useLocale} from "next-intl";
import {useRouter} from "next/navigation";

type Locale = "en" | "bn";

export default function LanguageToggle() {
  const router = useRouter();
  const currentLocale = useLocale() as Locale;
  const nextLocale: Locale = currentLocale === "en" ? "bn" : "en";

  const onClick = async () => {
    await fetch("/api/locale", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({locale: nextLocale})
    });

    // Re-render Server Components with new locale cookie
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded border border-slate-300 px-3 py-2 text-slate-800 hover:bg-slate-50"
    >
      English / বাংলা
    </button>
  );
}

