const tok = (name: string) => `var(--color-${name})`

export const NAVY = tok("brand-navy")
export const LOGO_PURPLE = "#9348FF"

/** Brand gradient presets, as defined for brand icons in nimbus-assets (src/constants/brand.colors.js). */
export const GRADIENTS = {
  "purple-rain": [tok("brand-purple"), tok("brand-pink")],
  "luscious-green": [tok("brand-blue"), tok("brand-green")],
  "blue-hour": [tok("brand-purple"), tok("brand-green")],
  "the-way-of-water": [tok("brand-purple"), tok("brand-aqua")],
} as const
export type GradientName = keyof typeof GRADIENTS

export const GRADIENT_HEX: Record<GradientName, [string, string]> = {
  "purple-rain": ["#7648FF", "#FF276F"],
  "luscious-green": ["#0098FF", "#22FFBB"],
  "blue-hour": ["#7648FF", "#22FFBB"],
  "the-way-of-water": ["#7648FF", "#23E0F9"],
}
