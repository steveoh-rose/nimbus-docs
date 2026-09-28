import "server-only"
import * as appIcons from "@nimbus/assets/icons/app"
import * as brandIcons from "@nimbus/assets/icons/brand"

import type { ReelData } from "@/components/showcase/nimbus-reel"
import { PALETTE_FAMILIES, PALETTE_STEPS, allTokens, contrastRatio } from "@/lib/tokens"
import { documentedComponents } from "@/lib/nimbus-nav"

const round2 = (n: number) => Math.round(n * 100) / 100

export function reelData(): ReelData {
  const tokens = allTokens()
  const hex = new Map(tokens.map((t) => [t.name, t.value]))
  const get = (name: string) => {
    const v = hex.get(name)
    if (!v) throw new Error(`Showcase: missing token ${name}`)
    return v
  }

  const palette = PALETTE_FAMILIES.map((family) => ({
    family,
    steps: PALETTE_STEPS.map((step) => get(`--color-palette-${family}-${step}`)),
  }))

  const step500 = PALETTE_FAMILIES.map((family) => {
    const value = get(`--color-palette-${family}-500`)
    return { family, hex: value, ratio: round2(contrastRatio(value, "#ffffff")) }
  })

  const primary = get("--color-primary-300")
  const count = (m: object) => Object.keys(m).filter((k) => k !== "default").length
  const appIconCount = count(appIcons)
  const brandIconCount = count(brandIcons)
  const tokenCount = tokens.filter((t) => !t.deprecatedNote && /^--(color|font|size-spacer)-/.test(t.name)).length

  return {
    steps: [...PALETTE_STEPS],
    palette,
    step500,
    button: {
      rest: primary,
      hover: get("--color-primary-400"),
      pressed: get("--color-primary-500"),
      contrastOnRest: round2(contrastRatio(primary, "#ffffff")),
    },
    stats: {
      components: documentedComponents().length,
      tokens: tokenCount,
      icons: appIconCount + brandIconCount,
      appIcons: appIconCount,
      brandIcons: brandIconCount,
    },
    // Brand SVGs in nimbus-assets' first asset commit (907a8aa, March 2024).
    brandIconsAtLaunch: 105,
  }
}
