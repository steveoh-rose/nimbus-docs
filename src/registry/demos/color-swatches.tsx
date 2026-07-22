const swatches = [
  { name: "background / foreground", bg: "bg-background", fg: "text-foreground", border: true },
  { name: "card / card-foreground", bg: "bg-card", fg: "text-card-foreground", border: true },
  { name: "primary / primary-foreground", bg: "bg-primary", fg: "text-primary-foreground" },
  { name: "secondary / secondary-foreground", bg: "bg-secondary", fg: "text-secondary-foreground" },
  { name: "muted / muted-foreground", bg: "bg-muted", fg: "text-muted-foreground" },
  { name: "accent / accent-foreground", bg: "bg-accent", fg: "text-accent-foreground" },
  { name: "destructive", bg: "bg-destructive", fg: "text-white" },
]

export default function ColorSwatchesDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
      {swatches.map((swatch) => (
        <div
          key={swatch.name}
          className={`flex h-20 flex-col justify-between rounded-lg p-3 text-xs ${swatch.bg} ${swatch.fg} ${
            swatch.border ? "border" : ""
          }`}
        >
          <span className="font-mono">{swatch.name}</span>
        </div>
      ))}
    </div>
  )
}
