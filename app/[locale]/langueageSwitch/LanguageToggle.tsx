"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const locales = ["en", "bn"] as const;
type Locale = (typeof locales)[number];

export default function LanguageToggle({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const nextLocale: Locale = currentLocale === "en" ? "bn" : "en";

  const onClick = () => {
    // pathname format: /{locale}/... (locale segment may be missing for unexpected routes)
    const segments = pathname.split("/").filter(Boolean);
    const rest = segments.length > 1 ? segments.slice(1).join("/") : "";
    const nextPath = `/${nextLocale}${rest ? `/${rest}` : ""}`;
    const query = searchParams.toString();
    router.push(query ? `${nextPath}?${query}` : nextPath);
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

