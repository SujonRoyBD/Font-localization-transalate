"use client";

import { useTranslations } from "next-intl";

export default function Button() {
  const t = useTranslations("Nav");
  const td = useTranslations("Banner");


  return (
    <div>
      <p>{t("home")}</p>
    <p>{t("services")}</p>
    <p>{t("faqs")}</p>

    <p>{td("titleLine1")}</p>

    </div>
  );
}