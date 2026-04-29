import { redirect } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/app/Components/Shared/Navbar";


const locales = ['en', 'bn'] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = 'en';

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    const safeLocale = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
    if (safeLocale !== locale) redirect(`/${defaultLocale}`);

    setRequestLocale(safeLocale);

    const messages = await getMessages();

    return (
        <html lang={safeLocale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Navbar/>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}