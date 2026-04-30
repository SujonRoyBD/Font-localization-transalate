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
    <div className=" ">
    <button
      type="button"
      onClick={onClick}
      className="text-white px-4 border border-none"
    >
      English / franch
    </button>
  </div>
  );
}

