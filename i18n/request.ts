import {getRequestConfig} from "next-intl/server";
import {cookies, headers} from "next/headers";

type Locale = "en" | "bn";
const defaultLocale: Locale = "en";

function resolveLocaleFromAcceptLanguage(value: string | null): Locale | undefined {
  if (!value) return;
  // Very small heuristic: if Bangla appears anywhere, choose bn, otherwise en.
  // Works for headers like: "bn-BD,bn;q=0.9,en-US;q=0.8,en;q=0.7"
  if (/\bbn\b/i.test(value) || /\bbn-/i.test(value)) return "bn";
  if (/\ben\b/i.test(value) || /\ben-/i.test(value)) return "en";
}

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get("NEXT_LOCALE")?.value;
  const headerLocale = resolveLocaleFromAcceptLanguage((await headers()).get("accept-language"));

  const locale: Locale =
    cookieLocale === "en" || cookieLocale === "bn"
      ? cookieLocale
      : headerLocale ?? defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});