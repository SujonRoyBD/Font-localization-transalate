import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';

const locales = ['en', 'bn'] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({requestLocale}) => {
  // `requestLocale` corresponds to the `[locale]` segment in your URL.
  // In next-intl v4, `locale` is deprecated and may be undefined.
  const requested = await requestLocale;

  const locale: Locale = hasLocale(locales as unknown as string[], requested)
    ? (requested as Locale)
    : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});