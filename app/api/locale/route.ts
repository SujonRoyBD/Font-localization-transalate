import {NextResponse} from "next/server";

const locales = ["en", "bn"] as const;
type Locale = (typeof locales)[number];

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as null | {locale?: unknown};
  const locale = body?.locale;

  if (typeof locale !== "string" || !locales.includes(locale as Locale)) {
    return NextResponse.json({ok: false}, {status: 400});
  }

  const res = NextResponse.json({ok: true});

  // next-intl middleware & docs use this cookie name for locale detection.
  res.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    sameSite: "lax"
  });

  return res;
}

