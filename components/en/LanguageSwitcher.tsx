"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <Link
      href={isEnglish ? "/" : "/en"}
      className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#07182D]"
    >
      {isEnglish ? "FA" : "EN"}
    </Link>
  );
}