"use client"

import { usePathname } from "next/navigation"

import { sectionOf } from "@/lib/nav-config"

/** Gradient kicker naming the page's section (or an explicit eyebrow such as "Core component"). */
export function SectionKicker({ eyebrow }: { eyebrow?: string }) {
  const section = sectionOf(usePathname())
  const label = [section, eyebrow].filter(Boolean).join(" · ")
  return label ? <p className="brand-kicker mb-4">{label}</p> : null
}
