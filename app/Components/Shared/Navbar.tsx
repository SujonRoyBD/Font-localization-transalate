"use client";

import LanguageToggle from "@/app/[locale]/langueageSwitch/LanguageToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const locale = pathname.split("/")[1] || "bn";

  return (
    <nav className="flex justify-between p-4 border-b">
   

      <LanguageToggle currentLocale={locale as "en" | "bn"} />
    </nav>
  );
}