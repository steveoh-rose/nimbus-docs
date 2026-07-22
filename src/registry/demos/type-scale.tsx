const scale = [
  { label: "text-xs", className: "text-xs" },
  { label: "text-sm", className: "text-sm" },
  { label: "text-base", className: "text-base" },
  { label: "text-lg", className: "text-lg" },
  { label: "text-xl", className: "text-xl" },
  { label: "text-2xl", className: "text-2xl font-semibold" },
  { label: "text-3xl", className: "text-3xl font-semibold" },
  { label: "text-4xl", className: "text-4xl font-bold tracking-tight" },
]

export default function TypeScaleDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      {scale.map((step) => (
        <div key={step.label} className="flex items-baseline gap-4">
          <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
            {step.label}
          </span>
          <span className={step.className}>Nimbus design system</span>
        </div>
      ))}
    </div>
  )
}
