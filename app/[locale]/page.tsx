import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import LanguageToggle from "./langueageSwitch/LanguageToggle";

const locales = ['en', 'bn'] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = 'bn';

export default async function Home({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const safeLocale = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
    if (safeLocale !== locale) redirect(`/${defaultLocale}`);

    const t = await getTranslations({ locale: safeLocale, namespace: "home" });

    return (
        <div className="space-y-4">
        

            <button type="button" className="rounded bg-blue-600 px-4 py-2 text-white">
                {t("title")}
            </button>
        </div>
    );
}