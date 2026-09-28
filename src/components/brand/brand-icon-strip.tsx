"use client"

import { useSyncExternalStore, type ComponentType, type SVGProps } from "react"
import * as BrandIcons from "@nimbus/assets/icons/brand"

import type { GradientName } from "@/components/brand/brand-art"
import { cn } from "@/lib/utils"

type BrandIcon = ComponentType<SVGProps<SVGSVGElement> & { gradient?: GradientName; contrastMode?: "light" | "dark" }>
const icons = BrandIcons as unknown as Record<string, BrandIcon>
const noopSubscribe = () => () => {}

/** Real nimbus-assets brand icons, each drawn with the gradient and contrast mode given. */
export function BrandIconStrip({
  items,
  contrastMode = "light",
  size = 48,
  className,
  tileClassName,
}: {
  items: Array<{ name: string; gradient: GradientName }>
  contrastMode?: "light" | "dark"
  size?: number
  className?: string
  tileClassName?: string
}) {
  // Each icon mints a random gradient id on mount, so render them client-side only to avoid hydration mismatches.
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false)
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {items.map(({ name, gradient }) => {
        const Icon = icons[name]
        if (!Icon) return null
        return (
          <li key={`${name}-${gradient}`} className={cn("flex items-center justify-center", tileClassName)} style={{ fontSize: size }}>
            {isClient ? (
              <Icon gradient={gradient} contrastMode={contrastMode} aria-label={`${name} icon, ${gradient}`} role="img" />
            ) : (
              <span style={{ width: "1em", height: "1em" }} />
            )}
          </li>
        )
      })}
    </ul>
  )
}
