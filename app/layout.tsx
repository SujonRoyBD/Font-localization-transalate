import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages, setRequestLocale} from "next-intl/server";
import Navbar from "@/app/Components/Shared/Navbar";

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const locale = await getLocale();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

