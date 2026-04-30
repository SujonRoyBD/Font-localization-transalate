import "./globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages, setRequestLocale} from "next-intl/server";

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const locale = await getLocale();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="px-10">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

