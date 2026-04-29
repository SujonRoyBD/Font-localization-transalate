"use client";

import LanguageToggle from "@/app/Components/LanguageToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <LanguageToggle />
    </nav>
  );
}